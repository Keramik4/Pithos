import express from "express"
import { connectToDB } from "./db"
import { getProductsRouter } from "./routes/products"
import { getGraphQlRouter } from "./routes/products/graphQl-index"

const app = express()

app.use(express.json())
app.use("/products", getProductsRouter())
app.use("/graphql", getGraphQlRouter())

connectToDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at localhost:${process.env.PORT}/test`)
  })
})
