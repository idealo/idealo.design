import { promisify } from 'util'
import path from 'path'

import express from 'express'
import fetch from 'cross-fetch'
import redisLib from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import bodyParser from 'body-parser'
import cors from 'cors'
import slugify from 'slugify'

import passport  from 'passport'
import { OAuth2Strategy } from 'passport-oauth'

import Renderer from './renderer'

import {
  fetchList,
  fetchAllCategories,
  fetchPostsByCategorySlug,
  fetchSinglePost,
  storeSinglePost,
  updateSinglePost,
  fetchDistinctCategories,
  deleteSinglePost,
  archiveSinglePost,
  fetchAllTitles,
} from './db';

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379'
const redis = redisLib.createClient(REDIS_URL)
const getAsync = promisify(redis.get).bind(redis)

// dev env: 'http://localhost:8080/auth/provider/callback'
const CALLBACK_URL = process.env.CALLBACK_URL || 'https://idealo.design/auth/provider/callback'
const CLIENT_ID = process.env.OAUTH2_CLIENT_ID
const CLIENT_SECRET = process.env.OAUTH2_CLIENT_SECRET
const TENANT_ID = process.env.OAUTH2_TENANT_ID

const BASE_URL = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0`
const TOKEN_URL = `${BASE_URL}/token`
const AUTHZ_URL = `${BASE_URL}/authorize`

const PROFILE_ENDPOINT = 'https://graph.microsoft.com/v1.0/me'

const PORT = process.env.HTTP_PORT || 8080
const app = express()

const RedisStore = connectRedis(session)

const dangerousTestModeArgument = process.argv[process.argv.indexOf('dangerousTestModeArgument')] || false

redis.on('error', err => {
  console.log('redis error: ', err)
})

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
  const session = await getAsync(`sess:${id}`)
  done(null, session)
});

app.use(session({
  secret: 'i am not so secret pleaaase change me soon',
  name: '_idealodesign',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  if(redis){
    store: new RedisStore({ host: 'localhost', port: 6379, client: redis, ttl: 86400 })
  }

}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors());
app.use(bodyParser.json());

if (CLIENT_ID) {
  passport.use('provider', new OAuth2Strategy({
    authorizationURL: AUTHZ_URL,
    tokenURL: TOKEN_URL,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    passReqToCallback: true,
  }, async (req, accessToken, refreshToken, profile, done) => {
    console.log('PASSPORT::')
    console.log('accessToken:', accessToken)
    console.log('refreshToken:', refreshToken)
    console.log('done:', done)
    console.log('req: ', req)

    let user

    try {
      const resp = await fetch(PROFILE_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })

      user = await resp.json()
    } catch (err) {
      console.log('error fetching profile: ', err)
    }

    req.session.user = user;
    done(null, user)
  }));
}

function isAuthenticated(req, res, next) {
  if(req.session.user){
    return next();
  }

  console.log('blub', dangerousTestModeArgument)

  if(dangerousTestModeArgument){
    return next();
  }

  res.status(403).send('You do not have rights to visit this page');
}

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/auth/provider', passport.authenticate('provider', {
  scope: 'openid',
}))

app.get('/auth/provider/callback',
        passport.authenticate('provider', { successRedirect: '/',
                                            failureRedirect: '/login' }))

app.get('/api/me', (req, res) => {
  const user = req.session.user;

  const resp = {
    status: 'NOT_LOGGED_IN'
  };
  if (user) {
    resp.status = 'LOGGED_IN';
    resp.user = user;
  }

  if(dangerousTestModeArgument){
    resp.status = 'LOGGED_IN';
    resp.user = null;
  }

  res.json(resp);
})

app.get("/logout", function(req, res) {
  req.session.destroy(() => {
    req.logout();
    res.redirect("/");
  });
});

app.get('/api/blogposts/:slug?', async (req, res) => {
  const { slug } = req.params;
  if (!slug) {
    const { byCategorySlug: categorySlug } = req.query;
    let posts = [];

    if (categorySlug) {
      posts = await fetchPostsByCategorySlug({categorySlug});
    } else {
      posts = await fetchList();
    }
    return res.json(posts);
  }

  const blogpost = await fetchSinglePost({ slug });
  return res.json(blogpost);
})

app.post('/api/blogposts', isAuthenticated, async (req, res) => {
  const newBlogpost = req.body;
  newBlogpost.slug = slugify(newBlogpost.title);
  newBlogpost.date = (new Date()).toISOString();
  newBlogpost.blogpostcontent = req.body.blogpostcontent;
  const createdBlogpost = await storeSinglePost(newBlogpost);

  return res.json(createdBlogpost);
});

app.get('/api/categories', isAuthenticated, async (req, res) => {
  const categories = await fetchAllCategories();
  return res.json(categories);
})

app.get('/api/title', isAuthenticated, async (req, res) => {
  const titles = await fetchAllTitles();
  return res.json(titles);
})

app.get('/api/distinctCategories', async (req, res) => {
  const categories = await fetchDistinctCategories();
  return res.json(categories);
})

app.get('/*', (req, res) => {
  return Renderer(req, res)
})

app.put('/api/blogposts', isAuthenticated, async (req, res) => {
  const updatedBlogpost = req.body;
  updatedBlogpost.slug = slugify(updatedBlogpost.title);
  updatedBlogpost.date = (new Date()).toISOString();

  const createdBlogpost = await updateSinglePost(updatedBlogpost);

  return res.json(createdBlogpost);
});

app.put('/api/blogposts/archive',isAuthenticated, async (req,res) => {
  const blogpost = req.body;
  const archiveBlogpost = await archiveSinglePost(blogpost);
  return res.json(archiveBlogpost)
})

app.put('/api/blogposts/delete', isAuthenticated, async (req,res) => {
  const blogpost = req.body;
  const deletedBlogpost = await deleteSinglePost(blogpost)
  return res.json('successfully deleted blogpost')
})

export { app }