export interface CreatePhotoType {
  name: string
  description: string
  filename: string
  views: number
  isPublished: boolean
}

export interface UpdatePhotoType {
  name?: string
  description?: string
  filename?: string
  views?: number
  isPulished?: boolean
}
