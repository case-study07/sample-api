import { Router, Request, Response } from 'express'
import { allPhoto, insertPhoto } from '../lib/Photo.db'

export const indexRouter = Router()

indexRouter.get('/insert', (req: Request, res: Response) => {
  insertPhoto()
  res.json({
    user: 'sato',
  })
})

indexRouter.get('/all', async (req: Request, res: Response) => {
  const photos = await allPhoto()
  res.json({
    response: 200,
    photos,
  })
})
