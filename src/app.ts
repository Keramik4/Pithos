import express from "express"
import { connectToDB } from "./db/"
import { getProductRouter } from "./routes/products"
import { getStorageRouter } from "./routes/storage"

const app = express()

app.use(express.json())
app.use("/products", getProductRouter())
app.use("/storage", getStorageRouter())

connectToDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at localhost:${process.env.PORT}/test`)
  })
})
