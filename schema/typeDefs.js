import ApolloServer from 'apollo-server'

import viewer from './viewer.js'
import information from './information.js'
import reference from './reference.js'

const { gql } = ApolloServer

const queries = gql`
  type Query {
    viewer: Viewer @cacheControl(maxAge: 36000, scope: PRIVATE)
    information: Information @cacheControl(maxAge: 36000, scope: PUBLIC)
    reference: Reference @cacheControl(maxAge: 36000, scope: PUBLIC)
  }
`

const mutations = gql`
  type Mutation {
    login(username: String, password: String): Viewer
    logout: Viewer
  }
`

export default [queries, mutations, viewer, information, reference]
