import graphqlFields from 'graphql-fields'

import runSQL from '../helpers/runSQL.js'

const country = (parent, args, context, info) => {
  const { id } = args

  const fields = graphqlFields(info)

  let SQL

  const params = { id }

  if (fields.geoJson && fields.eventCount) {
    SQL = 'COUNTRY_EVENTCOUNTS_GEOJSON'
  } else if (fields.geoJson) {
    SQL = 'COUNTRY_GEOJSON'
  } else if (fields.eventCount) {
    SQL = 'COUNTRY_EVENTCOUNTS'
  } else {
    SQL = 'COUNTRY'
  }

  return runSQL(SQL, context.pool, params).then((rows) => rows[0])
}

export default country
