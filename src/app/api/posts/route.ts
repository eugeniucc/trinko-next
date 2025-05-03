import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get('page') || '1', 10)
  const limit = parseInt(searchParams.get('limit') || '10', 10)
  const skip = (page - 1) * limit
  const id = searchParams.get('id')

  try {
    if (id) {
      const post = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: { media: true }
      })

      if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 })
      }

      return NextResponse.json(post)
    } else {
      const posts = await prisma.post.findMany({
        skip,
        take: limit,
        include: {
          media: true
        }
      })

      const totalCount = await prisma.post.count()
      const totalPages = Math.ceil(totalCount / limit)

      return NextResponse.json({
        posts,
        page,
        totalCount,
        totalPages
      })
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error)
    }
    return NextResponse.json({ error: 'Error fetching posts from database' }, { status: 500 })
  }
}
