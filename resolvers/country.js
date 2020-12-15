import runSQL from '../helpers/runSQL.js'

const country = (parent, args, context, info) => {
  const { id } = args

  const params = { id }

  return runSQL('COUNTRY', context.pool, params).then((rows) => rows[0])
}

export default country
