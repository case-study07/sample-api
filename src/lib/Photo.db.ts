import { getRepository } from 'typeorm'
import { Photo } from '../entity/photo.entity'
import { dbConnection } from '../../config/db.connection'

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

export const allPhoto = async () => {
  await dbConnection()
  const photos = await getRepository(Photo).find()
  return photos
}
