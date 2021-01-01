import ApolloServer from 'apollo-server'

const { gql } = ApolloServer

const information = gql`
  """
  Public available information
  """
  type Information {
    countries: [Country]

    country(id: ID): Country

    places(match: String!): [Place]
  }

  type Country {
    id: ID
    name: String
    iso2Code: String
    iso3Code: String

    states: [State]
    cities: [City]

    state(id: ID): State
    city(id: ID): City

    outline: String
    center: String
  }

  type State {
    id: ID
    name: String
    hascCode: String

    countryId: ID
    countryName: String

    outline: String
    center: String
  }

  type City {
    id: ID
    name: String

    countryId: ID
    countryName: String

    outline: String
    center: String
  }

  type Place {
    id: ID
    name: String
    displayOrder: Float
    type: String

    countryId: ID
    countryName: String
  }
`

export default information
