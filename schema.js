import ApolloServer from 'apollo-server'

const { gql } = ApolloServer

const typeDefs = gql`
  type Query {
    countries: [Country]
    country(id: ID): Country

    places(match: String!): [Place]

    markers(area: AreaCoveredEnum): [Marker]
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

    geoJson: String

    eventCount: Int
    markers(area: AreaCoveredEnum): [Marker]
  }

  type State {
    id: ID
    name: String
    hascCode: String

    geoJson: String

    eventCount: Int

    events: [Event]
  }

  type City {
    id: ID
    name: String

    geoJson: String

    eventCount: Int

    events: [Event]
  }

  type Place {
    id: ID
    name: String
    displayOrder: Float
    type: String
    countryName: String
    countryId: ID
  }

  type Marker {
    id: ID
    latitude: Float
    longitude: Float
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

  enum AreaCoveredEnum {
    HUNDRED_SQUARE_KILOMETERS
    TEN_SQUARE_KILOMETERS
    ONE_SQUARE_KILOMETER
  }

  type Outline {
    id: ID
    name: String
    iso2Code: String
    iso3Code: String

    geoJson: String

    eventCount: Int
  }
`

export default typeDefs
