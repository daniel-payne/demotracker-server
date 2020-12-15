import runSQL from '../helpers/runSQL.js'

const countries = (parent, args, context, info) => {
  const fields = graphqlFields(info)

  return runSQL('COUNTRIES', context.pool)
}

export default countries
