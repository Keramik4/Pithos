import { buildSchema } from "graphql"
import { graphqlHTTP } from "express-graphql"
import {
  getAllStorages,
  addStorage,
  deleteStorage,
  updateStorageName,
} from "../db"

const schema = buildSchema(`
  type Mutation {
    addStorage(name: String!): Storage
    deleteStorage(id: Int!): Status
    updateStorageName(id: Int!, name: String!): Storage
  }

  type Query {
    list: [Storage]
  }

  type Storage {
    id: Int
    name: String!
    state: Int
    expirationDate: String
    productId: Int
  }

  enum Status {
    success
    error
  }
`)

const root = {
  list: getAllStorages,
  addStorage,
  deleteStorage,
  updateStorageName,
}

export const getStorageRouter = () => {
  return graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
}
