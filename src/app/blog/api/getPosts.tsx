import { Post } from '../types/blog.types'

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch('/api/posts')
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}
