import { getProductRepo } from "../db-connect"
import { ResponseStatus } from "../../enums"

export const getAllProducts = async () => {
  try {
    const list = await getProductRepo().find()
    return list
  } catch (err) {
    console.log("getAllProducts ERROR:", err)
    return []
  }
}

type IdObject = {
  id: number
}
export const getOneProduct = async ({ id }: IdObject) => {
  try {
    const product = await getProductRepo().findOneBy({
      id,
    })
    return product
  } catch (err) {
    console.log(`getOneProduct for id = ${id}ERROR:`, err)
    return null
  }
}

type AddProductsProps = {
  name: string
  capacity: number
}
export const addProduct = async (props: AddProductsProps) => {
  try {
    const repo = getProductRepo()
    const newProduct = repo.create(props)
    const insertResult = await repo.save(newProduct)
    return insertResult
  } catch (err) {
    console.log("addProduct ERROR:", err)
    return null
  }
}

type ProductToUpdate = {
  id: number
  name?: string
  capacity?: number
}
export const updateProduct = async ({
  id,
  name,
  capacity,
}: ProductToUpdate) => {
  if (!name && !capacity) return null
  try {
    const repo = getProductRepo()
    const pickedProduct = await repo.findOneBy({ id })
    if (!pickedProduct) throw new Error("Product with that id doesn't exist")

    if (name) pickedProduct.name = name
    if (capacity) pickedProduct.capacity = capacity

    const updateResult = await repo.save(pickedProduct)

    return updateResult
  } catch (err) {
    console.log(`updateProduct for id = ${id}ERROR:`, err)
    return null
  }
}

export const deleteProduct = async ({ id }: IdObject) => {
  if (!id) return ResponseStatus.failure

  try {
    await getProductRepo().delete({ id })
    return ResponseStatus.success
  } catch (err) {
    console.log("addProduct ERROR:", err)
    return null
  }
}
