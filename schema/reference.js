import ApolloServer from 'apollo-server'

const { gql } = ApolloServer

const reference = gql`
  """
  UI setup information
  """
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
`

export default reference
