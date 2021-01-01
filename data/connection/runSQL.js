const LOG_NAME = true
const LOG_SQL = false

import loadSQL from './loadSQL.js'
import replaceParameters from './replaceParameters.js'

const runSQL = (name, pool, params = {}) => {
  let sql = loadSQL(name)

  for (const prop in params) {
    const find = prop
    const replace = params[prop]

    sql = replaceParameters(find, replace, sql)
  }

  if (LOG_NAME) {
    console.info(name, params)
  }

  if (LOG_SQL) {
    console.info('=============================================================================')
    console.info(sql)
  }

  return pool.query(sql).then((res) => res.rows)
}

export default runSQL
