import { supabase } from './supabase'

export const getSupabaseImages = async (bucket: string, page: number, limit: number) => {
  const offset = (page - 1) * limit

  const { data, error } = await supabase.storage.from(bucket).list('', {
    limit,
    offset
  })

  if (error) {
    console.error('Error fetching supabase images:', error)
    return []
  }

  return data.map((file) => supabase.storage.from(bucket).getPublicUrl(`${file.name}`).data.publicUrl)
}
