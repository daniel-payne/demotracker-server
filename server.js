import apolloServer from 'apollo-server'
import 'apollo-cache-control'
import responseCachePlugin from 'apollo-server-plugin-response-cache'
import pg from 'pg'

import schema from './schema.js'

import countries from './resolvers/countries.js'
import places from './resolvers/places.js'
import country from './resolvers/country.js'
import state from './resolvers/state.js'
import city from './resolvers/city.js'
import markers from './resolvers/markers.js'
import events from './resolvers/events.js'

import states from './batchers/states.js'
import cities from './batchers/cities.js'

import LoadStates from './loaders/LoadStates.js'
import LoadCities from './loaders/LoadCities.js'

import LoadStatesWithEvents from './loaders/LoadStatesWithEvents.js'
import LoadCitiesWithEvents from './loaders/LoadCitiesWithEvents.js'

const ONE_MONTH = 1 * 30 * 24 * 60 * 60

const pool = new pg.Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'geotracker',
  port: 5432,
})

const resolvers = {
  Query: {
    countries,
    country,
    places,
    markers,
  },
  Country: {
    states,
    cities,

    state,
    city,

    markers,
  },
  State: {
    events,
  },
  City: {
    events,
  },
}

const loadCities = LoadCities(pool)
const loadStates = LoadStates(pool)

const loadStatesWithEvents = LoadStatesWithEvents(pool)
const loadCitiesWithEvents = LoadCitiesWithEvents(pool)

const server = new apolloServer.ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ request, response }) => ({
    pool,
    loadCities,
    loadStates,
    loadStatesWithEvents,
    loadCitiesWithEvents,
  }),
  plugins: [responseCachePlugin()],
  cacheControl: {
    defaultMaxAge: ONE_MONTH,
  },
})

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`)
})
