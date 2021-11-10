import { Router, Request, Response } from 'express'
import { insertPhoto } from '../lib/Photo.db'

export const indexRouter = Router()

indexRouter.get('/', (req: Request, res: Response) => {
  insertPhoto()
  res.json({
    user: 'sato',
  })
})
