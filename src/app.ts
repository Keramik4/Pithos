import express, { NextFunction, Request, Response } from "express"
import { connectToDB, createTable, getProducts, insertProducts } from "./db"

const app = express()
app.use(express.json())

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.send("hi")
})

app.get("/products/list", (req: Request, res: Response, next: NextFunction) => {
  getProducts().then((r) => {
    res.send(JSON.stringify(r))
    console.log(r)
  })
})

app.post(
  "/products/insert",
  (req: Request, res: Response, next: NextFunction) => {
    insertProducts().then(() => res.send("INSERTED"))
    console.log(req.body)

    res.send("ok")
  }
)

connectToDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at localhost:${process.env.PORT}/test`)
  })
})
