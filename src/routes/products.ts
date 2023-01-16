import { buildSchema } from "graphql"
import { graphqlHTTP } from "express-graphql"
import {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../db"

const schema = buildSchema(`
  type Mutation {
    addProduct(name: String!, capacity: Int!): Product
    updateProduct(id: Int!, capacity: Int, name: String): Product
    deleteProduct(id: Int!) : Status
  }

  type Query {
    list: [Product]!
    product(id: Int!): Product
  }


  type Product {
    id: Int
    name: String
    capacity: Int
  }

  enum Status {
    success
    error
  }
`)

const root = {
  list: getAllProducts,
  product: getOneProduct,
  addProduct: addProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
}

export const getProductRouter = () => {
  return graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
}
