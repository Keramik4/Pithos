import { buildSchema } from "graphql"
import { graphqlHTTP } from "express-graphql"
import { resolveList, resolveProduct } from "./resolvers"

const schema = buildSchema(`
  type Query {
    list: [Product]
    product(id: Int): Product
  }

  type Product {
    id: ID
    name: String
    capacity: Int
  }
`)

const root = {
  list: resolveList,
  product: resolveProduct,
}

export const getGraphQlRouter = () => {
  return graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
}
