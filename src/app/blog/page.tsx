'use client'

import { MainTag } from '@/app/ui/main/MainTag'
import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { getPosts } from './api/getPosts.api'
import { useQuery } from '@tanstack/react-query'
import { SkeletonLoader } from '../ui/SkeletonLoader'
import { useState } from 'react'
import { PostCard } from './ui/PostCard'

export default function Blog() {
  const [page] = useState(1)
  const limit = 6

  const { data, isLoading } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => getPosts({ page, limit })
  })

  return (
    <MainTag className="bg-zinc-900">
      <div className="container mx-auto min-h-screen px-4">
        <div className="pt-35 pb-10 lg:pt-60">
          <CustomBreadcrumb />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => <SkeletonLoader className="h-[500px]" key={index} />)
            : data?.posts && data.posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </MainTag>
  )
}
