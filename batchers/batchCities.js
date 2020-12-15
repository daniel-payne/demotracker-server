import graphqlFields from 'graphql-fields'

const batchCities = (parent, args, context, info) => {
  const countryCode = parent.id

  if (!countryCode) {
    return
  }

  const fields = graphqlFields(info)

  const loader = context.loadCities

  return loader.load(countryCode).then((data) => {
    if (data) {
      data.sort((a, b) => (a.name > b.name ? 1 : -1))
    }

    return data
  })
}

export default batchCities
