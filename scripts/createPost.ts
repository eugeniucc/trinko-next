import { PrismaClient } from '../prisma/generated/prisma'

const prisma = new PrismaClient()

async function createPost() {
  const post = await prisma.post.create({
    data: {
      title: 'Татуировка с цветами',
      content: 'Татуировка с цветами — это отличный способ выразить свою индивидуальность.',
      media: {
        create: [
          {
            url: 'https://example.com/image1.jpg',
            type: 'image'
          },
          {
            url: 'https://example.com/video1.mp4',
            type: 'video'
          }
        ]
      }
    }
  })

  console.log('Пост с медиа успешно создан:', post)
}

createPost()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
