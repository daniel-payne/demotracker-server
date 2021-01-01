import viewer from './queries/viewer.js'
import reference from './queries/reference.js'
import information from './queries/information.js'

import overlays from './queries/overlays.js'

import markers from './queries/markers.js'
import events from './queries/events.js'
import counts from './queries/counts.js'

import countries from './queries/countries.js'
import places from './queries/places.js'
import country from './queries/country.js'
import state from './queries/state.js'
import city from './queries/city.js'

import login from './mutations/login.js'
import logout from './mutations/logout.js'

import batchStates from './batchers/batchStates.js'
import batchCities from './batchers/batchCities.js'

const resolvers = {
  Query: {
    viewer,
    information,
    reference,
  },
  Mutation: {
    login,
    logout,
  },

  Viewer: {
    globalMarkers: markers,
    globalCounts: counts,

    countryMarkers: markers,
    countryCounts: counts,

    stateEvents: events,
    cityEvents: events,
  },
  Information: {
    countries,

    country,

    places,
  },
  Reference: {
    overlays,
  },
  Country: {
    states: batchStates,
    cities: batchCities,

    state,
    city,
  },
  State: {},
  City: {},
}

export default resolvers
