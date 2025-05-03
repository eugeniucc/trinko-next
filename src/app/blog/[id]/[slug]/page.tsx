'use client'

import parse from 'html-react-parser'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getPostById } from '../../api/getPostsById'
import { SkeletonLoader } from '@/app/ui/SkeletonLoader'

export default function PostPage() {
  const { id } = useParams()
  const post = String(id)

  const { data, isLoading } = useQuery({
    queryKey: ['data', post],
    queryFn: () => getPostById(post)
  })

  return (
    <section className="min-h-screen bg-zinc-900 pt-35 pb-10 md:pt-55">
      {isLoading ? (
        <div className="container mx-auto grid grid-cols-1 gap-4 px-4 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <SkeletonLoader className="h-[500px]" key={index} />
          ))}
        </div>
      ) : (
        data && (
          <div className="container mx-auto px-4 text-white">
            <h1 className="mb-12 text-center text-3xl font-bold text-red-300 md:text-5xl">{data.title}</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {data.media.map((media) => (
                <div key={media.id} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={media.url}
                    alt={data.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={500}
                    height={350}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h2 className="text-center text-2xl font-bold">
                      Качественные татуировки в Кишинёве, Индивидуальный подход, Тату салон в Кишинёве
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="[&_footer]:mt-12 [&_footer]:border-t [&_footer]:border-gray-700 [&_footer]:pt-4 [&_footer]:text-gray-400 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-red-400 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-2xl [&_h3]:font-medium [&_h3]:text-red-300 [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-xl [&_h4]:font-medium [&_h4]:text-red-200 [&_li]:mb-2 [&_p]:mb-4 [&_p]:text-lg [&_p]:leading-relaxed [&_strong]:text-red-100 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&>article]:space-y-6 [&>article>section]:space-y-4">
                {parse(data.content)}
              </div>
            </div>
          </div>
        )
      )}
    </section>
  )
}
