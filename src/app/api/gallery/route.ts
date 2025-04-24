import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1', 10)
    const pageSize = 10

    const images = await prisma.galleryImage.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: 'asc' }
    })

    const totalCount = await prisma.galleryImage.count()

    const totalPages = Math.ceil(totalCount / pageSize)
    return NextResponse.json({ images, totalCount, totalPages, page })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error fetching images from database' }, { status: 500 })
  }
}
