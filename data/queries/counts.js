import runSQL from '../connection/runSQL.js'

const sqlFor = {
  globalCounts: 'COUNTS_FOR_GLOBE',
  countryCounts: 'COUNTS_FOR_COUNTRY',
  stateCounts: 'COUNTS_FOR_STATE',
  cityCounts: 'COUNTS_FOR_CITY',
}

const counts = (parent, args, context, info) => {
  if (!context.session) {
    return
  }

  const { id } = args

  const sql = sqlFor[info.fieldName]

  const ID = id

  const params = { ID }

  return runSQL(sql, context.pool, params)
}

export default counts
