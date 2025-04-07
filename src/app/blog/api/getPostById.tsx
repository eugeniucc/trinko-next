export const getPostById = async (id: string) => {
  const res = await fetch(`/api/posts/${id}`)
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}
