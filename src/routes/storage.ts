import { buildSchema } from "graphql"
import { graphqlHTTP } from "express-graphql"
import {
  getAllStorages,
  addStorage,
  deleteStorage,
  updateStorageName,
  getAllEmptyStorages,
  getProductStorage,
} from "../db"
import { ProductSchema } from "./products"

const schema = buildSchema(`
  type Mutation {
    addStorage(name: String!): Storage
    deleteStorage(id: Int!): Status
    updateStorageName(id: Int!, name: String!): Storage
  }

  type Query {
    list: [Storage]
    listEmpty: [Storage]
    listByProduct(productId: Int!): [Storage]
  }

  type Storage {
    id: Int
    name: String!
    state: Int
    expirationDate: String
    product: Product
  }

  enum Status {
    success
    error
  }

  ${ProductSchema}
`)

const root = {
  list: getAllStorages,
  listEmpty: getAllEmptyStorages,
  listByProduct: getProductStorage,
  addStorage,
  deleteStorage,
  updateStorageName,
}

export const getStorageRouter = () => {
  return graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
}
