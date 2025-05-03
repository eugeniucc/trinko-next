export type Media = {
  id: number
  url: string
  postId: number
}

export type PostWithMedia = {
  id: number
  title: string
  content: string
  createdAt: string
  media: Media[]
}

export type PostsResponse = {
  posts: PostWithMedia[]
  totalCount: number
  page: number
  totalPages: number
}

export type PostCardProps = {
  post: PostWithMedia
}
