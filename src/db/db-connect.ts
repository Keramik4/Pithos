import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { Product } from "./products/product-entity"

dotenv.config()

const dbSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Product],
})

export const connectToDB = async () => {
  try {
    await dbSource.initialize()
    console.log("db connected")
  } catch (err) {
    console.log("dbError:", err)
  }
}

export const getProductRepo = () => dbSource.getRepository(Product)
