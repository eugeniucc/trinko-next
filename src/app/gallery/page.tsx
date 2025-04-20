'use client'
import { useState } from 'react'
import { MainTag } from '@/app/ui/main/MainTag'
import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { getSupabaseImages } from '@/lib/getSupabaseImages'
import { useQuery } from '@tanstack/react-query'
import { SkeletonLoader } from '../ui/SkeletonLoader'
import Image from 'next/image'

export default function Gallery() {
  const [page, setPage] = useState(1)

  const { data, isLoading } = useQuery({
    queryKey: ['images', page],
    queryFn: () => getSupabaseImages('gallery', page, 20)
  })

  return (
    <MainTag className="bg-zinc-900">
      <div className="container mx-auto min-h-screen px-4">
        <div className="py-35 lg:py-60">
          <CustomBreadcrumb />

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => <SkeletonLoader className="h-[460px]" key={index} />)
              : data?.map((url, index) => (
                  <Image key={index} width={400} height={460} src={url} alt={'Тату Кишинев'} className="rounded shadow-md" />
                ))}
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <button
              className="rounded bg-zinc-800 px-4 py-2 text-white disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Назад
            </button>
            <button className="rounded bg-zinc-800 px-4 py-2 text-white" onClick={() => setPage((p) => p + 1)}>
              Вперёд
            </button>
          </div>
        </div>
      </div>
    </MainTag>
  )
}
