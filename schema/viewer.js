import ApolloServer from 'apollo-server'

const { gql } = ApolloServer

const viewer = gql`
  """
  Only available to a logged-in user
  """
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

export default viewer
