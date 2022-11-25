import express from "express"
import { connectToDB } from "./db"
import { getProductsRouter } from "./routes/products"

const app = express()

app.use(express.json())
app.use("/products", getProductsRouter())

connectToDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at localhost:${process.env.PORT}/test`)
  })
})
