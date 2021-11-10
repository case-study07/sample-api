import { Router, Request, Response } from 'express'

export const indexRouter = Router()

indexRouter.get('/', (req: Request, res: Response) => {
  res.json({
    user: 'sato',
  })
})
