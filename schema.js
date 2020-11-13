import ApolloServer from 'apollo-server'

const { gql } = ApolloServer

const typeDefs = gql`
  type Query {
    viewer: Viewer @cacheControl(maxAge: 36000, scope: PRIVATE)
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

  type Reference {
    countries: [Country]

    country(id: ID): Country
    state(id: ID): State
    city(id: ID): City

    places(match: String!): [Place]
  }

  type Country {
    id: ID
    name: String
    iso2Code: String
    iso3Code: String

    states: [State]
    cities: [City]

    geoJson: String
  }

  type State {
    id: ID
    name: String
    hascCode: String

    countryId: ID
    countryName: String

    geoJson: String
  }

  type City {
    id: ID
    name: String

    countryId: ID
    countryName: String

    geoJson: String
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
    summary: String
    perpetrator: String
    numberKilled: Int
    numberWounded: Int
    attackType: String
    attackSubType: String
    targetType: String
    targetSubType: String
    primaryWeaponType: String
    primaryWeaponSubType: String
    secondaryWeaponType: String
    secondaryWeaponSubType: String
    tertiaryWeaponType: String
    tertiaryWeaponSubType: String
  }
`

export default typeDefs
