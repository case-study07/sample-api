import { Router, Request, Response, json } from 'express'
import { Photo } from '../entity/photo.entity'
import {
  allPhoto,
  deletePhoto,
  insertPhoto,
  onePhoto,
  updatePhoto,
} from '../lib/Photo.db'
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

photoRouter.get('/:id', async (req: Request, res: Response) => {
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

photoRouter.get('/insert', (req: Request, res: Response) => {
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

photoRouter.get('/update/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    if (id === undefined) throw 'undefined is id'
    const body: UpdatePhotoType = {
      name: 'test',
      description: 'description',
      filename: 'test.png',
    }
    const result = await updatePhoto(id, body)
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

photoRouter.get('/delete/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    if (id === undefined) throw 'undefined is id'
    const result = await deletePhoto(id)
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
