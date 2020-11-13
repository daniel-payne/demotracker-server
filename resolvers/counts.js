import runSQL from '../helpers/runSQL.js'

const counts = (parent, args, context, info) => {
  if (!context.session) {
    return
  }

  const { id: ID } = args

  let SQL

  if (info.fieldName === 'countryCounts') {
    SQL = 'COUNTS_FOR_COUNTRY'
  } else if (info.fieldName === 'globalCounts') {
    SQL = 'COUNTS_FOR_GLOBE'
  }

  const params = { ID }

  return runSQL(SQL, context.pool, params)
}

export default counts
