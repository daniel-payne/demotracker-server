import graphqlFields from 'graphql-fields'

import runSQL from '../helpers/runSQL.js'

const countries = (parent, args, context, info) => {
  const fields = graphqlFields(info)

  let SQL

  if (fields.geoJson && fields.eventCount) {
    SQL = 'COUNTRIES_EVENTCOUNTS_GEOJSON'
  } else if (fields.eventCount) {
    SQL = 'COUNTRIES_EVENTCOUNTS'
  } else if (fields.geoJson) {
    SQL = 'COUNTRIES_GEOJSON'
  } else {
    SQL = 'COUNTRIES'
  }

  return runSQL(SQL, context.pool)
}

export default countries
