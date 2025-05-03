import { apiClient } from '@/utils/apiClient'
import { PostsResponse } from '../types/blog.types'

export const getPosts = async (params: { page?: number; limit?: number; id?: string }): Promise<PostsResponse> => {
  const { data } = await apiClient.get<PostsResponse>('/posts', {
    params
  })
  return data
}
