import runSQL from '../connection/runSQL.js'

const places = (parent, args, context, info) => {
  const { match } = args

  const params = { match: match + '%' }

  return runSQL('PLACES', context.pool, params)
}

export default places
