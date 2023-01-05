import { Request, Response } from "express"

export type StatusObject = { status: string }
export const getSuccessStatus = (): StatusObject => ({
  status: "ok",
})

export const getErrorStatus = (): StatusObject => ({
  status: "error",
})
