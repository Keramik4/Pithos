import { getProducts, getOneProduct, Product } from "./products-db"

export const resolveList = async () => await getProducts()

export const resolveProduct = async ({ id }: { id: number }) => {
  const product = await getOneProduct(id)

  return product[0]
}

export const resolveAddProduct = async (data: any): Promise<Product> => {
  console.log(data)
  return {
    name: "123",
    id: 1,
    capacity: 123,
  }
}
