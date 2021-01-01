import runSQL from '../connection/runSQL.js'

const state = (parent, args, context, info) => {
  const { id } = args

  const params = { id }

  return runSQL('STATE', context.pool, params).then((rows) => rows[0])
}

export default state
