export type PostWithMedia = {
  id: number
  title: string
  content: string
  createdAt: string
  media: {
    id: number
    url: string
    type: string
    createdAt: string
    postId: number
  }[]
}
