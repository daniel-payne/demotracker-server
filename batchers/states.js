import graphqlFields from 'graphql-fields'

const states = (parent, args, context, info) => {
  const countryCode = parent.iso2Code

  const fields = graphqlFields(info)

  if (!countryCode) {
    return
  }

  const loader = context.loadStates

  return loader.load(countryCode).then((data) => {
    if (data) {
      data.sort((a, b) => (a.name > b.name ? 1 : -1))
    }

    return data
  })
}

export default states
