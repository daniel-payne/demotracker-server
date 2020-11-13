import graphqlFields from 'graphql-fields'

import runSQL from '../helpers/runSQL.js'

const countries = (parent, args, context, info) => {
  const fields = graphqlFields(info)

  const showGeoJson = fields.geoJson

  let SQL

  if (showGeoJson) {
    SQL = 'COUNTRIES_WITH_GEOJSON'
  } else {
    SQL = 'COUNTRIES'
  }

  return runSQL(SQL, context.pool)
}

export default countries
