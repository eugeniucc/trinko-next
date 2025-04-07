export async function GET() {
  const posts = [
    {
      id: 1,
      title: 'First Post',
      content: 'This is the first post'
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the second post'
    }
  ]

  return new Response(JSON.stringify(posts))
}
