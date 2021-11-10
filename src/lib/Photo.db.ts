import { getRepository } from 'typeorm'
import { Photo } from '../entity/photo.entity'
import { dbConnection } from '../../config/db.connection'

// post
export const insertPhoto = async () => {
  const connection = await dbConnection()
  let photo = new Photo()
  photo.name = 'Me and Bears'
  photo.description = 'I am near polar bears3'
  photo.filename = 'photo-with-bears.jpg'
  photo.views = 1
  photo.isPublished = true

  let photoRepository = connection.getRepository(Photo)

  await connection.manager.save(photo)
  console.log('Photo has been saved.')

  let savePhotos = await photoRepository.find()
  console.log('All photos from the db:', savePhotos)
}

// allFetch
export const allPhoto = async () => {
  await dbConnection()
  const photos = await getRepository(Photo).find()
  return photos
}

// oneFetch
export const onePhoto = async (id: number) => {
  await dbConnection()
  const photo = await getRepository(Photo).findOne(id)
  return photo
}

// update
export const updatePhoto = async (id: number, body: Photo) => {
  try {
    const connection = await dbConnection()
    const photoRepository = connection.getRepository(Photo)
    const photo = await getRepository(Photo).findOne(id)
    if (photo === undefined) throw 'photo is undefined'
    photoRepository.merge(photo, body)
    const result = await photoRepository.save(photo)
    return result
  } catch (err) {
    return err
  }
}

// delete
export const deletePhoto = async (id: number) => {
  try {
    const connection = await dbConnection()
    const photoRepository = connection.getRepository(Photo)
    const photo = await getRepository(Photo).findOne(id)
    if (photo === undefined) throw 'phoso is undefined'
    const result = photoRepository.delete(photo)
    return result
  } catch (err) {
    return err
  }
}
