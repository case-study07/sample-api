import { Router, Request, Response, json } from 'express'
import { UpdatePhotoType } from '../types/Photo.type'

export const photoRouter = Router()

photoRouter.get('/all', async (req: Request, res: Response) => {
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

photoRouter.post('/insert', async (req: Request, res: Response) => {
  try {
    const { name, description, filename, views, isPublished } = req.body
    const result = await insertPhoto({
      name,
      description,
      filename,
      views,
      isPublished,
    })
    console.log(result)
    res.json({
      response: 200,
    })
  } catch (err) {
    res.json({
      response: 500,
      message: err,
    })
  }
})