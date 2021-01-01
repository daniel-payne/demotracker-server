import ApolloServer from 'apollo-server'

const { gql } = ApolloServer

const typeDefs = gql`
  type Query {
    viewer: Viewer @cacheControl(maxAge: 36000, scope: PRIVATE)
    information: Information @cacheControl(maxAge: 36000, scope: PUBLIC)
    reference: Reference @cacheControl(maxAge: 36000, scope: PUBLIC)
  }

  type Mutation {
    login(username: String, password: String): Viewer
    logout: Viewer
  }

  type Viewer {
    id: ID
    role: String
    session: String

    globalMarkers: [Marker]
    globalCounts: [Count]

    countryMarkers(id: ID): [Marker]
    countryCounts(id: ID): [Count]

    stateEvents(id: ID): [Event]
    cityEvents(id: ID): [Event]
  }

  type Information {
    countries: [Country]

    country(id: ID): Country

    places(match: String!): [Place]
  }

  type Reference {
    overlays: [Overlay]
  }

  type Overlay {
    id: ID
    name: String
    options: [Option]
  }

  type Option {
    id: ID
    name: String
    ranges: [Range]
  }

  type Range {
    id: ID
    name: String
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

  type Marker {
    id: ID
    latitude: Float
    longitude: Float
    eventCount: Int
  }

  type Count {
    id: ID
    eventCount: Int
  }

  type Event {
    id: ID
    date: String
    latitude: Float
    longitude: Float
    countryName: String
    stateName: String
    cityName: String
    countryId: Int
    stateId: Int
    cityId: Int
    centerJson: String
    isSuccess: String
    numberKilled: Int
    numberWounded: Int
    attackType: String
    attackDetails: String
    targetType: String
    targetDetails: String
    targetNationality: String
    perpetratorName: String
    perpetratorMotive: String
    weaponType: String
    weaponDetails: String
    additionalNotes: String
  }
`

export default typeDefs
