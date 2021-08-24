import { promisify } from "util";
import path from "path";

import express from "express";
import fetch from "cross-fetch";
import redisLib from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import bodyParser from "body-parser";
import cors from "cors";
import slugify from "slugify";
import uploadFileMiddleware from "../server/middleware/upload";

import passport from "passport";
import { OAuth2Strategy } from "passport-oauth";

import Renderer from "./renderer";

import {
  fetchAllCategories,
  fetchList,
  fetchPostsByCategorySlug,
  fetchSinglePost,
  storeSinglePost,
  updateSinglePost,
  fetchDistinctCategories,
  deleteSinglePost,
  archiveSinglePost,
  fetchAllTitles,
  fetchComponents,
  fetchTags,
  fetchMap,
  updateSingleComponent,
  fetchSingleComponent,
  deleteSingleComponent,
  importSingleComponent,
  fetchScreenshots,
  fetchReadMe,
} from "./db";

const dangerousTestModeArgument =
  !!process.env.DANGEROUS_TEST_MODE_ARGUMENT || false;

if (!dangerousTestModeArgument) {
  const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";
  const redis = redisLib.createClient(REDIS_URL);
  const getAsync = promisify(redis.get).bind(redis);
  redis.on("error", (err) => {
    console.log("redis error: ", err);
  });
  passport.deserializeUser(async (id, done) => {
    const session = await getAsync(`sess:${id}`);
    done(null, session);
  });
}

// dev env: 'http://localhost:8080/auth/provider/callback'
const CALLBACK_URL =
  process.env.CALLBACK_URL || "https://idealo.design/auth/provider/callback";
const CLIENT_ID = process.env.OAUTH2_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH2_CLIENT_SECRET;
const TENANT_ID = process.env.OAUTH2_TENANT_ID;

const BASE_URL = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0`;
const TOKEN_URL = `${BASE_URL}/token`;
const AUTHZ_URL = `${BASE_URL}/authorize`;

const PROFILE_ENDPOINT = "https://graph.microsoft.com/v1.0/me";

const PORT = process.env.HTTP_PORT || 8080;
const app = express();

const RedisStore = connectRedis(session);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

app.use(
  session({
    secret: "i am not so secret pleaaase change me soon",
    name: "_idealodesign",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    if(redis) {
      store: new RedisStore({
        host: "localhost",
        port: 6379,
        client: redis,
        ttl: 86400,
      });
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(bodyParser.json({ limit: "10000mb" }));

if (CLIENT_ID) {
  passport.use(
    "provider",
    new OAuth2Strategy(
      {
        authorizationURL: AUTHZ_URL,
        tokenURL: TOKEN_URL,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: CALLBACK_URL,
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, done) => {
        console.log("PASSPORT::");
        console.log("accessToken:", accessToken);
        console.log("refreshToken:", refreshToken);
        console.log("done:", done);
        console.log("req: ", req);

        let user;

        try {
          const resp = await fetch(PROFILE_ENDPOINT, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          user = await resp.json();
        } catch (err) {
          console.log("error fetching profile: ", err);
        }

        req.session.user = user;
        done(null, user);
      }
    )
  );
}

function isBasicAuthenticated(req, res, next) {
  const base64Credentials = req.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");
  if (
    username === process.env.UPLOADER_USERNAME &&
    password === process.env.UPLOADER_PWD
  ) {
    return next();
  }
  res.status(403).send("You do not have rights to import components.");
}

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }

  if (dangerousTestModeArgument) {
    return next();
  }

  res.status(403).send("You do not have rights to visit this page");
}

app.use("/public", express.static(path.join(__dirname, "public")));

app.get(
  "/auth/provider",
  passport.authenticate("provider", {
    scope: "openid",
  })
);

app.get(
  "/auth/provider/callback",
  passport.authenticate("provider", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.get("/api/me", (req, res) => {
  const user = req.session.user;

  const resp = {
    status: "NOT_LOGGED_IN",
  };
  if (user) {
    resp.status = "LOGGED_IN";
    resp.user = user;
  }

  if (dangerousTestModeArgument) {
    resp.status = "LOGGED_IN";
    resp.user = null;
  }

  res.json(resp);
});

app.get("/logout", function (req, res) {
  req.session.destroy(() => {
    req.logout();
    res.redirect("/");
  });
});

app.get("/api/components", isAuthenticated, async (req, res) => {
  const components = await fetchComponents();
  return res.json(components);
});

app.get(
  "/api/screenshots/:screenshot_id?",
  isAuthenticated,
  async (req, res) => {
    const screenshot_id = req.params;
    const screenshots = await fetchScreenshots(screenshot_id);
    return res.json(screenshots[0].screenshot);
  }
);

app.get("/api/tags", isAuthenticated, async (req, res) => {
  const tags = await fetchTags();
  return res.json(tags);
});

app.get("/api/map", isAuthenticated, async (req, res) => {
  const map = await fetchMap();
  return res.json(map);
});

app.get("/api/read/:slug?", isAuthenticated, async (req, res) => {
  const { slug } = req.params;
  const readme = await fetchReadMe({ slug });
  return res.json(readme);
});

app.put("/api/components/update", isBasicAuthenticated, async (req, res) => {
  try {
    await uploadFileMiddleware(req, res);

    if (req.files === undefined || req.body === undefined) {
      return res.status(400).send({
        message: "Please upload a screenshot!",
      });
    }

    const screenshotPaths = [];

    req.files.forEach((file) => {
      screenshotPaths.push(
        "screenshots/" + req.body.screenshotFolderName + "/" + file.originalname
      );
    });

    const componentData = req.body;

    res.status(200).send({
      message: "Uploaded component successfully!",
      component: await importSingleComponent(screenshotPaths, componentData),
    });
  } catch (err) {
    res.status(500).send({
      message: "Could not upload the screenshots." + err,
    });
  }
});

app.put("/api/components/:component_id?", isAuthenticated, async (req, res) => {
  const component = req.body;
  const updatedComponent = await updateSingleComponent(component);
  return res.json(updatedComponent);
});

app.get("/api/components/:slug?", isAuthenticated, async (req, res) => {
  const { slug } = req.params;
  const singleComponent = await fetchSingleComponent({ slug });
  return res.json(singleComponent);
});

app.delete(
  "/api/components/:component_id?",
  isAuthenticated,
  async (req, res) => {
    const { component_id } = req.params;
    const deletedSingleComponent = await deleteSingleComponent({
      component_id,
    });
    return res.json(deletedSingleComponent);
  }
);

app.get("/api/blogposts/:slug?", async (req, res) => {
  const { slug } = req.params;
  if (!slug) {
    const { byCategorySlug: categorySlug } = req.query;
    let posts = [];

    if (categorySlug) {
      posts = await fetchPostsByCategorySlug({ categorySlug });
    } else {
      posts = await fetchList();
    }
    return res.json(posts);
  }

  const blogpost = await fetchSinglePost({ slug });
  return res.json(blogpost);
});

app.post("/api/blogposts", isAuthenticated, async (req, res) => {
  const newBlogpost = req.body;
  newBlogpost.slug = slugify(newBlogpost.title);
  newBlogpost.date = new Date().toISOString();
  newBlogpost.blogpostcontent = req.body.blogpostcontent;
  const createdBlogpost = await storeSinglePost(newBlogpost);

  return res.json(createdBlogpost);
});

app.get("/api/categories", isAuthenticated, async (req, res) => {
  const categories = await fetchAllCategories();
  return res.json(categories);
});

app.get("/api/title", isAuthenticated, async (req, res) => {
  const titles = await fetchAllTitles();
  return res.json(titles);
});

app.get("/api/distinctCategories", async (req, res) => {
  const categories = await fetchDistinctCategories();
  return res.json(categories);
});

app.get("/*", (req, res) => {
  return Renderer(req, res);
});

app.put("/api/blogposts", isAuthenticated, async (req, res) => {
  const updatedBlogpost = req.body;
  updatedBlogpost.slug = slugify(updatedBlogpost.title);
  updatedBlogpost.date = new Date().toISOString();

  const createdBlogpost = await updateSinglePost(updatedBlogpost);

  return res.json(createdBlogpost);
});

app.put("/api/blogposts/archive", isAuthenticated, async (req, res) => {
  const blogpost = req.body;
  const archiveBlogpost = await archiveSinglePost(blogpost);
  return res.json(archiveBlogpost);
});

app.put("/api/blogposts/delete", isAuthenticated, async (req, res) => {
  const blogpost = req.body;
  await deleteSinglePost(blogpost);
  return res.json("successfully deleted blogpost");
});

export { app };
