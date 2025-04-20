'use client'

import { MainTag } from '@/app/ui/main/MainTag'
import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { usePosts } from './hooks/usePosts'

export default function Blog() {
  const { data, isLoading } = usePosts()

  return (
    <MainTag className="bg-zinc-900">
      <div className="container mx-auto min-h-screen px-4">
        <div className="py-35 lg:py-60">
          <CustomBreadcrumb />
        </div>
        <div>
          {isLoading ? (
            <h2 className="text-center text-2xl font-bold text-white">Loading...</h2>
          ) : (
            data?.map((post) => (
              <div key={post.id}>
                <h2 className="text-center text-2xl font-bold text-white">{post.title}</h2>
                <p className="text-center text-lg text-gray-400">{post.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </MainTag>
  )
}
