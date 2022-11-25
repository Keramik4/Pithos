import { Request, Response } from "express"

export const errorHandler = (req: Request, res: Response, error: any) => {
  console.log(`ERROR for request: ${req.baseUrl}${req.path}`)
  console.log(error)

  res.status(500)
  res.send("ERROR")
}
