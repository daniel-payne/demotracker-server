import graphqlFields from 'graphql-fields'

import runSQL from '../helpers/runSQL.js'

const country = (parent, args, context, info) => {
  const { id } = args

  const fields = graphqlFields(info)

  const showGeoJson = fields.geoJson

  let SQL

  if (showGeoJson) {
    SQL = 'COUNTRY_WITH_GEOJSON'
  } else {
    SQL = 'COUNTRY'
  }

  const params = { id }

  return runSQL(SQL, context.pool, params).then((rows) => rows[0])
}

export default country
