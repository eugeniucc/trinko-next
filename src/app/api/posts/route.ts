import { NextResponse } from 'next/server'
import { PrismaClient } from '../../../../prisma/generated/prisma'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const posts = await prisma.post.findMany()
    return NextResponse.json(posts)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Ошибка при получении постов' }, { status: 500 })
  }
}
