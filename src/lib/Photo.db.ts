import { createConnection } from 'typeorm'
import { Photo } from '../entity/photo.entity'
import connectionConfig from '../../ormconfig-local'

export const insertPhoto = () => {
  createConnection(connectionConfig)
    .then((connection) => {
      let photo = new Photo()
      photo.name = 'Me and Bears'
      photo.description = 'I am near polar bears'
      photo.filename = 'photo-with-bears.jpg'
      photo.views = 1
      photo.isPublished = true

      return connection.manager.save(photo).then((photo) => {
        console.log('Photop has been saved. Photo id is', photo.id)
      })
    })
    .catch((error) => console.error(error))
}
