'use client'

import { MainTag } from '@/app/ui/main/MainTag'
import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { getPosts } from './api/getPosts'
import { useQuery } from '@tanstack/react-query'
import { PostCard } from './ui/PostCard'

export default function Blog() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  return (
    <MainTag className="bg-zinc-900">
      <div className="container mx-auto min-h-screen px-4">
        <div className="py-35 lg:py-60">
          <CustomBreadcrumb />
        </div>
        <div>
          {data?.map((post, id) => (
            <div key={id}>
              <PostCard title={post.title} content={post.content} />
            </div>
          ))}
        </div>
      </div>
    </MainTag>
  )
}
