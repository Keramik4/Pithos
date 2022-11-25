import { Request } from "express"

type ValidateRequest = (req: Request) => Boolean

export const validateId: ValidateRequest = (req) => {
  const { id } = req.body

  if (!id) return false

  return typeof id === "number"
}

export const validateProduct: ValidateRequest = (req) => {
  const { name, capacity } = req.body

  if (!name || !capacity) return false
  if (typeof name !== "string") return false

  return typeof capacity === "number"
}
