import runSQL from '../helpers/runSQL.js'

const country = (parent, args, context, info) => {
  const { id } = parent

  let SQL

  const params = { id }

  if (parent.hasOwnProperty('hascCode')) {
    SQL = 'EVENTS_FOR_STATE'
  } else {
    SQL = 'EVENTS_FOR_CITY'
  }

  return runSQL(SQL, context.pool, params)
}

export default country
