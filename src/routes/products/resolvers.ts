import {
  getProducts,
  getOneProduct,
  insertProduct,
  deleteProduct,
  updateProduct,
  Product,
} from "./products-db"
import {
  getSuccessStatus,
  getErrorStatus,
  StatusObject,
} from "../../utils/response-handlers"

export const resolveList = async () => await getProducts()

type IdObject = Pick<Product, "id">

export const resolveProduct = async ({ id }: { id: number }) => {
  const product = await getOneProduct(id)

  return product[0]
}

type AddProductResolver = (
  props: Pick<Product, "name" | "capacity">
) => Promise<StatusObject>
export const resolveAddProduct: AddProductResolver = ({ name, capacity }) => {
  return insertProduct(name, capacity)
    .then(getSuccessStatus)
    .catch(getErrorStatus)
}

type DeleteResolver = (prop: IdObject) => Promise<StatusObject>
export const resolveDeleteProduct: DeleteResolver = ({ id }) => {
  return deleteProduct(id).then(getSuccessStatus).catch(getErrorStatus)
}

type UpdadeOption = {
  id: number
  name?: string
  capacity?: number
}
type UpdateResolver = (prop: UpdadeOption) => Promise<StatusObject>
export const resolveUpdateProduct: UpdateResolver = ({
  id,
  name,
  capacity,
}) => {
  return updateProduct(id, name, capacity)
    .then(getSuccessStatus)
    .catch(getErrorStatus)
}
