import graphqlFields from 'graphql-fields'

const cities = (parent, args, context, info) => {
  const countryCode = parent.iso2Code

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

export default cities
