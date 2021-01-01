import runSQL from '../connection/runSQL.js'

const countries = (parent, args, context, info) => {
  return runSQL('COUNTRIES', context.pool)
}

export default countries
