import graphqlFields from 'graphql-fields'

import runSQL from '../helpers/runSQL.js'

const state = (parent, args, context, info) => {
  const { id } = args

  const fields = graphqlFields(info)

  let SQL

  const params = { id }

  if (fields.geoJson && fields.eventCount) {
    SQL = 'STATE_EVENTCOUNTS_GEOJSON'
  } else if (fields.geoJson) {
    SQL = 'STATE_GEOJSON'
  } else if (fields.eventCount) {
    SQL = 'STATE_EVENTCOUNTS'
  } else {
    SQL = 'STATE'
  }

  return runSQL(SQL, context.pool, params).then((rows) => rows[0])
}

export default state
