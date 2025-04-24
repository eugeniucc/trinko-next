import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const posts = await prisma.post.findMany()
    return NextResponse.json(posts)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error)
    }
    return NextResponse.json({ error: 'Error fetching posts from database' }, { status: 500 })
  }
}
