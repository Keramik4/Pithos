import { buildSchema } from "graphql"
import { graphqlHTTP } from "express-graphql"
import {
  resolveList,
  resolveProduct,
  resolveAddProduct,
  resolveDeleteProduct,
  resolveUpdateProduct,
} from "./resolvers"

const schema = buildSchema(`
  type Mutation {
    addProduct(name: String, capacity: Int): Status
    deleteProduct(id: Int) : Status
    updateProduct(id: Int!, capacity: Int, name: String): Status
  }

  type Query {
    list: [Product]
    product(id: Int): Product
  }

  type Product {
    id: Int
    name: String
    capacity: Int
  }

  type Status {
    status: String
  }
`)

const root = {
  list: resolveList,
  product: resolveProduct,
  addProduct: resolveAddProduct,
  deleteProduct: resolveDeleteProduct,
  updateProduct: resolveUpdateProduct,
}

export const getProductRouter = () => {
  return graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
}
