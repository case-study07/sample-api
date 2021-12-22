import { NextFunction } from 'connect'
import { Router, Request, Response, json } from 'express'
import {
  allPhoto,
  deletePhoto,
  insertPhoto,
  onePhoto,
  updatePhoto,
} from '../lib/Photo.db'
import { UpdatePhotoType } from '../types/Photo.type'

export const photoRouter = Router()

// /photo/all
photoRouter.get('/all', async (req: Request, res: Response, next: NextFunction) => {
  try{
    const photos = await allPhoto()
    res.json({
      response: 200,
      photos,
    })
  }catch(err){
    return next(err)
  }
})

photoRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try{
    const id = parseInt(req.params.id)
    const photo = await onePhoto(id)
    if(photo === undefined) throw new Error("404 Not Found")
    res.json({
      response: 200,
      photo,
    })
  }catch(err){
    return next(err)
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

photoRouter.put('/update/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const { name, description, filename, views, isPublished } = req.body
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

photoRouter.delete('/delete/:id', async (req: Request, res: Response) => {
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