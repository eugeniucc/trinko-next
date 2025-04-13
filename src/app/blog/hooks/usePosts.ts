'use client'

import { useQuery } from '@tanstack/react-query'
import { PostWithMedia } from '../types/blog.types'

export const usePosts = () => {
  return useQuery<PostWithMedia[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('/api/posts')
      if (!res.ok) {
        throw new Error('Error fetching posts')
      }
      const data = await res.json()
      return data
    }
  })
}
