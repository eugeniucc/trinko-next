export const getGalleryImages = async (page: number) => {
  const res = await fetch(`/api/gallery?page=${page}`)
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}
