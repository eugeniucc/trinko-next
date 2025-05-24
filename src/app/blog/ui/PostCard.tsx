import { PostCardProps } from '../types/blog.types'
import Image from 'next/image'
import parse from 'html-react-parser'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { urlSlug } from '@/lib/urlSlug'

export const PostCard = ({ post }: PostCardProps) => {
  const router = useRouter()

  const slug = urlSlug(post.title)

  const handleClick = () => {
    router.push(`/blog/${post.id}/${slug}`)
  }

  return (
    <div className="flex flex-col gap-5 overflow-hidden rounded-xl bg-gradient-to-br from-gray-500 to-gray-800 p-4 shadow-lg">
      <h2 className="text-center text-2xl font-bold tracking-tight text-white">{post.title}</h2>
      <div onClick={handleClick} className="aspect-auto cursor-pointer overflow-hidden rounded-md">
        <Image
          className="object-cover transition-transform duration-300 hover:scale-105"
          src={post.media[0].url}
          alt={post.title}
          width={700}
          height={500}
        />
      </div>
      <div className="line-clamp-5 text-sm text-white">{parse(post.content)}</div>
      <Button
        onClick={handleClick}
        className="cursor-pointer rounded-md bg-white px-4 py-2 font-semibold text-black transition duration-200 hover:bg-zinc-800 hover:text-white"
      >
        Read More
      </Button>
    </div>
  )
}
