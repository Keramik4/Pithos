import { queryDb } from "./index"

export const createTable = () => {
  const query = `
    CREATE TABLE Products (
      id int NOT NULL,
      name varchar(255) NOT NULL,
      quantityInPal int NOT NULL,
      PRIMARY KEY (id)
    )
  `
  return queryDb(query)
}

export const getProducts = () => {
  const query = `
    SELECT * FROM Products
  `
  return queryDb(query)
}

export const insertProducts = () => {
  const query = `
    INSERT INTO Products
    VALUES (1, 'BANANY', 1000)
  `
  return queryDb(query)
}
