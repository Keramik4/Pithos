import { queryDb } from "../../db"

export type Product = {
  id: number
  name: string
  capacity: number
}

export const getProducts = () => {
  const query = `
    SELECT * FROM Products;
  `
  return queryDb<Product>(query)
}

export const getOneProduct = (id: number) => {
  const query = `
    SELECT * FROM Products
    WHERE id=${id};
  `
  return queryDb<Product>(query)
}

export const insertProduct = (name: string, capacity: number) => {
  const query = `
    INSERT INTO Products (id, name, capacity)
    VALUES ((SELECT Max(id) + 1 FROM Products), '${name}', '${capacity}');
  `
  return queryDb(query)
}

export const deleteProduct = (id: number) => {
  const query = `
    DELETE FROM Products
    WHERE id=${id};
  `
  return queryDb(query)
}

export const updateProduct = (id: number, name?: string, capacity?: number) => {
  if (!name && !capacity) return Promise.reject()

  const nameUpdater = name ? `name='${name}'` : ""
  const comaQuery = name && capacity ? "," : ""
  const capacityUpdater = capacity ? `capacity='${capacity}'` : ""

  const query = `
    UPDATE Products
    SET ${nameUpdater} ${comaQuery} ${capacityUpdater}
    WHERE id=${id};
`
  return queryDb(query)
}
