import { apiClient } from '@/utils/apiClient'
import { PostWithMedia } from '../types/blog.types'

export const getPostById = async (id: string): Promise<PostWithMedia> => {
  const { data } = await apiClient.get<PostWithMedia>('/posts', {
    params: { id }
  })
  return data
}
