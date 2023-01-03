import { Pool } from "pg"
import dotenv from "dotenv"

dotenv.config()

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
})

export const connectToDB = async () => {
  try {
    await pool.connect()
    console.log("db connected")
  } catch (err) {
    console.log("dbError:", err)
  }
}

type DataQuery = <T>(sql: string, params?: any[]) => Promise<T[]>
export const queryDb: DataQuery = (sql: string, params?: any[]) => {
  const start = Date.now()

  return new Promise((resolve, reject) => {
    pool
      .query(sql, params)
      .then((result) => {
        console.log("executed query", {
          sql,
          duration: Date.now() - start,
          rows: result.rowCount,
        })
        if (result.rowCount === 0)
          throw new Error("Query did not affect anything")

        resolve(result.rows)
      })
      .catch((err) => {
        console.error("Error executing query", err.stack)
        reject()
      })
  })
}
