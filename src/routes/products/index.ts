import { Router } from "express"
import {
  getProducts,
  getOneProduct,
  insertProduct,
  deleteProduct,
  updateProduct,
} from "./products-db"
import { errorHandler } from "../../utils/response-handlers"
import { validateId, validateProduct } from "./validation"

export const getProductsRouter = () => {
  const router = Router({ mergeParams: true })

  router.get("/list", (req, res) => {
    getProducts()
      .then((products) => {
        res.send(JSON.stringify(products))
      })
      .catch((e) => {
        errorHandler(req, res, e)
      })
  })

  router.get("/product", (req, res) => {
    if (!validateId(req))
      return errorHandler(req, res, new Error("Wrong request body"))

    const productId: number = req.body.id

    getOneProduct(productId)
      .then((products) => {
        const product = products[0]
        res.send(JSON.stringify(product))
      })
      .catch((e) => {
        errorHandler(req, res, e)
      })
  })

  router.post("/add", (req, res) => {
    if (!validateProduct(req))
      return errorHandler(req, res, new Error("Wrong request body"))

    const { name, capacity } = req.body

    insertProduct(name, capacity)
      .then(() => {
        res.send("ok")
      })
      .catch((e) => {
        errorHandler(req, res, e)
      })
  })

  router.post("/remove", (req, res) => {
    if (!validateId(req))
      return errorHandler(req, res, new Error("Wrong request body"))

    const { id } = req.body

    deleteProduct(id)
      .then(() => {
        res.send("ok")
      })
      .catch((e) => {
        errorHandler(req, res, e)
      })
  })

  router.post("/update", (req, res) => {
    if (!validateId(req) || !validateProduct(req))
      return errorHandler(req, res, new Error("Wrong request body"))

    const { id, name, capacity } = req.body

    updateProduct(id, name, capacity)
      .then(() => {
        res.send("ok")
      })
      .catch((e) => {
        errorHandler(req, res, e)
      })
  })

  return router
}
