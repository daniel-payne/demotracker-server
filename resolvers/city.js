import runSQL from '../helpers/runSQL.js'

const city = (parent, args, context, info) => {
  const { id } = args

  const params = { id }

  return runSQL('CITY', context.pool, params).then((rows) => rows[0])
}

export default city
