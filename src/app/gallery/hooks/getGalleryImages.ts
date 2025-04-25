import { apiClient } from '@/utils/apiClient'
import { GalleryImages } from '../types/getGalleryImages.types'

export const getGalleryImages = async (page: number): Promise<GalleryImages> => {
  const { data } = await apiClient.get('/gallery', {
    params: { page }
  })
  return data
}
