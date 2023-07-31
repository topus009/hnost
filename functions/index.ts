import { Request, Response } from 'express'

const port = process.env.PORT || 5003
const service = process.env.SERVICE || "NHOST_"

export default (req: Request, res: Response) => {
  res.status(200).send(`${service} on port ${port}`)
}
