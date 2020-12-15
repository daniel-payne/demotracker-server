import runSQL from '../helpers/runSQL.js'

const sqlFor = {
  stateEvents: 'EVENTS_FOR_STATE',
  cityEvents: 'EVENTS_FOR_CITY',
}

const country = (parent, args, context, info) => {
  if (!context.session) {
    return
  }

  const { id: ID } = args

  const sql = sqlFor[info.fieldName]

  const params = { ID }

  return runSQL(sql, context.pool, params)
}

export default country
