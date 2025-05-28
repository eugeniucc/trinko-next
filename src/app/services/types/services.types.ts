type GalleryImageType = {
  src: string
  alt: string
  width: number
  height: number
  pswpWidth: number
  pswpHeight: number
}

export type GalleryProps = {
  images: GalleryImageType[]
}
