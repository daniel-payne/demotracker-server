import dotenv from 'dotenv'

import express from 'express'
import pkg from 'apollo-server-express'
const { ApolloServer } = pkg

import fs from 'fs'
import https from 'https'
import http from 'http'

import 'apollo-cache-control'
import responseCachePlugin from 'apollo-server-plugin-response-cache'
import pg from 'pg'

import typeDefs from './schema/typeDefs.js'
import resolvers from './data/resolvers.js'

import LoadStates from './data/loaders/LoadStates.js'
import LoadCities from './data/loaders/LoadCities.js'

import getCookiesMap from './helpers/getCookiesMap.js'

dotenv.config()

console.log(process.env.PGUSER, process.env.PGHOST, process.env.PGPORT)

let useHTTPS = false

process.argv.forEach(function (val) {
  if (val === '--https') {
    useHTTPS = true
  }
})

const ONE_MONTH = 1 * 30 * 24 * 60 * 60

const pool = new pg.Pool({
  // user:     process.env.PGUSER,
  // host:     process.env.PGHOST,
  // database: process.env.PGDATABASE,
  // port:     process.env.PGPORT,
  // password: process.env.PGPASSWORD,
})

const loadCities = LoadCities(pool)
const loadStates = LoadStates(pool)

const apollo = new ApolloServer({
  typeDefs,
  resolvers,

  cors: {
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
  },

  context: (request) => {
    const cookieMap = request.req.headers.cookie ? getCookiesMap(request.req.headers.cookie) : {}

    const session = cookieMap.session

    const setCookie = request.res.cookie.bind(request.res)

    setCookie.sameSite = 'none'

    return {
      session,
      setCookie,
      pool,
      loadCities,
      loadStates,
    }
  },
  plugins: [
    responseCachePlugin({
      sessionId: (requestContext) => {
        const session = requestContext.context.session || 0

        return session
      },
    }),
  ],
  cacheControl: {
    defaultMaxAge: ONE_MONTH,
  },
})

const app = express()
apollo.applyMiddleware({ app })

let server

if (useHTTPS) {
  server = https.createServer(
    {
      key: fs.readFileSync(`./selfsigned.key`),
      cert: fs.readFileSync(`./selfsigned.crt`),
    },
    app
  )
} else {
  server = http.createServer(app)
}

server.listen({ port: 4000 }, (url) =>
  console.log(`${useHTTPS ? 'HTTPS Server' : 'Server'} running at ${4000}`)
)
