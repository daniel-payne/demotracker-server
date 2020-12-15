import apolloServer from 'apollo-server'
import 'apollo-cache-control'
import responseCachePlugin from 'apollo-server-plugin-response-cache'
import pg from 'pg'

import schema from './schema.js'

import viewer from './resolvers/viewer.js'
import reference from './resolvers/reference.js'

import markers from './resolvers/markers.js'
import events from './resolvers/events.js'
import counts from './resolvers/counts.js'

import countries from './resolvers/countries.js'
import places from './resolvers/places.js'
import country from './resolvers/country.js'
import state from './resolvers/state.js'
import city from './resolvers/city.js'

import batchStates from './batchers/batchStates.js'
import batchCities from './batchers/batchCities.js'

import LoadStates from './loaders/LoadStates.js'
import LoadCities from './loaders/LoadCities.js'

import login from './mutations/login.js'
import logout from './mutations/logout.js'

const ONE_MONTH = 1 * 30 * 24 * 60 * 60

// 127.0.0.1 5432 3306 geotracker
const pool = new pg.Pool({
  // user:     process.env.PGUSER,
  // host:     process.env.PGHOST,
  // database: process.env.PGDATABASE,
  // port:     process.env.PGPORT,
  // password: process.env.PGPASSWORD,
})

const resolvers = {
  Query: {
    viewer,
    reference,
  },
  Viewer: {
    globalMarkers: markers,
    globalCounts: counts,

    countryMarkers: markers,
    countryCounts: counts,

    stateEvents: events,
  },
  Reference: {
    countries,

    country,

    places,
  },
  Country: {
    states: batchStates,
    cities: batchCities,

    state,
    city,
  },
  State: {},
  City: {},
  Mutation: {
    login,
    logout,
  },
}

const loadCities = LoadCities(pool)
const loadStates = LoadStates(pool)

function getCookiesMap(cookiesString) {
  return cookiesString
    .split(';')
    .map(function (cookieString) {
      return cookieString.trim().split('=')
    })
    .reduce(function (result, current) {
      result[current[0]] = current[1]
      return result
    }, {})
}

const server = new apolloServer.ApolloServer({
  typeDefs: schema,
  resolvers,

  cors: {
    origin: '*',
    credentials: true,
  },

  context: (request) => {
    const cookieMap = request.req.headers.cookie ? getCookiesMap(request.req.headers.cookie) : {}

    const session = cookieMap.session

    const setCookie = request.res.cookie.bind(request.res)

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

server.listen().then(({ url }) => {
  console.info(`Server running at ${url}`)
})
