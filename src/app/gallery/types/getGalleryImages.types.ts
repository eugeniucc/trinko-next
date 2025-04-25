export type GalleryImage = {
  id: number
  fileName: string
  url: string
  createdAt: string
}

export type GalleryImages = {
  images: GalleryImage[]
  totalCount: number
  totalPages: number
  page: number
}
