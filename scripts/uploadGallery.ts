import { prisma } from '@/lib/prisma'

const urls = [
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/10.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/11.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/12.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/13.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/14.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/15.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/16.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/17.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/18.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/19.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/1.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/20.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/21.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/22.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/23.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/24.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/25.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/26.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/27.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/28.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/29.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/2.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/30.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/31.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/32.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/33.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/34.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/35.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/36.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/3.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/4.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/5.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/6.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/7.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/8.webp',
  'https://ccfkoyzoakztqtsfcelt.supabase.co/storage/v1/object/public/gallery/9.webp'
]

async function main() {
  for (const url of urls) {
    const fileName = url.split('/').pop() || 'unknown.webp'

    await prisma.galleryImage.create({
      data: {
        fileName,
        url
      }
    })

    console.log(`✔ Saved ${fileName}`)
  }

  console.log('✅ All done')
}

main()
  .catch((err) => {
    console.error(err)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
