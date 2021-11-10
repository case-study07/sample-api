import { Router, Request, Response, json } from 'express'
import { allPhoto, insertPhoto, onePhoto } from '../lib/photo.db'

export const indexRouter = Router()

indexRouter.get('/insert', (req: Request, res: Response) => {
  try {
    insertPhoto()
    res.json({
      user: 'sato',
    })
  } catch (err) {
    res.json({
      response: 500,
      message: err,
    })
  }
})

indexRouter.get('/all', async (req: Request, res: Response) => {
  try {
    const photos = await allPhoto()
    res.json({
      response: 200,
      photos,
    })
  } catch (err) {
    res.json({
      response: 500,
      message: err,
    })
  }
})

indexRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const photo = await onePhoto(id)
    res.json({
      response: 200,
      photo,
    })
  } catch (err) {
    res.json({
      response: 500,
      message: err,
    })
  }
})
