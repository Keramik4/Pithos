import { queryDb } from "../../db"

type Product = {
  id: number
  name: string
  capacityPerPalett: number
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
    INSERT INTO Products (id, name, capacityPerPalett)
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

export const updateProduct = (id: number, name: string, capacity: number) => {
  const query = `
    UPDATE Products
    SET name='${name}', capacityPerPalett='${capacity}'
    WHERE id=${id};
`
  return queryDb(query)
}
