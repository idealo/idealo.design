import { promisify } from 'util'
import path from 'path'

import express from 'express'
import fetch from 'cross-fetch'
import redisLib from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'

import passport  from 'passport'
import { OAuth2Strategy } from 'passport-oauth'

import Renderer from './renderer'

const redis = redisLib.createClient()
const getAsync = promisify(redis.get).bind(redis)

const BASE_URL = 'https://login.microsoftonline.com/21956b19-fed2-44b7-90cf-b6d281c0a42a/oauth2/v2.0'
const TOKEN_URL = `${BASE_URL}/token`
const AUTHZ_URL = `${BASE_URL}/authorize`

const CLIENT_ID = '8e54d128-ff21-4a9e-8598-6c30f005a6e2'
const CLIENT_SECRET = '5s1_JWJ6e_6a5w8u3f_18zF.w3lPV8825H'

// const CALLBACK_URL = 'https://idealo.design/auth/provider/callback'
const CALLBACK_URL = 'http://localhost:8080/auth/provider/callback'

const PROFILE_ENDPOINT = 'https://graph.microsoft.com/v1.0/me'

const PORT = process.env.HTTP_PORT || 8080
const app = express()

const RedisStore = connectRedis(session)

redis.on('error', err => {
  console.log('redis error: ', err)
})

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const session = await getAsync(id)
  done(null, session);
});

app.use(session({
  secret: 'i am not so secret pleaaase change me soon',
  name: '_idealodesign',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new RedisStore({ host: 'localhost', port: 6379, client: redis, ttl: 86400 })
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use('provider', new OAuth2Strategy({
    authorizationURL: AUTHZ_URL,
    tokenURL: TOKEN_URL,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log('PASSPORT::')
    console.log('accessToken:', accessToken)
    console.log('refreshToken:', refreshToken)
    console.log('done:', done)

    let fetchedProfile

    try {
      const resp = await fetch(PROFILE_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })

      fetchedProfile = await resp.json()
    } catch (err) {
      console.log('error fetching profile: ', err)
    }

    console.log('fetchedProfile:', fetchedProfile)

    done(null, fetchedProfile)
  }
));

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/auth/provider', passport.authenticate('provider', {
  // scope: 'https://graph.microsoft.com/.default',
  // scope: 'email+profile',
  scope: 'openid',
}));

app.get('/auth/provider/callback',
        passport.authenticate('provider', { successRedirect: '/',
                                            failureRedirect: '/login' }));


app.get('/*', (req, res) => {
  return Renderer(req, res)
})

app.listen(PORT, () => {
  console.log(` -> 0.0.0.0:${PORT}`)
})

