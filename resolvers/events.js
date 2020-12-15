import runSQL from '../helpers/runSQL.js'

const country = (parent, args, context, info) => {
  if (!context.session) {
    return
  }

  const { id: ID } = args

  let SQL

  const params = { ID }

  if (info.fieldName === 'stateEvents') {
    SQL = 'EVENTS_FOR_STATE'
  } else if (info.fieldName === 'cityEvents') {
    SQL = 'EVENTS_FOR_CITY'
  }

  return runSQL(SQL, context.pool, params)
}

export default country
