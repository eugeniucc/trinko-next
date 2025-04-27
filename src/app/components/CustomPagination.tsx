import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis
} from '@/components/ui/pagination'

type CustomPaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  paginationClassName?: string
  btnNext?: string
  btnPrev?: string
  btnEllipsis?: string
  btnLink?: string
}

export const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  btnNext,
  btnPrev,
  btnLink,
  paginationClassName,
  btnEllipsis
}: CustomPaginationProps) => {
  return (
    <Pagination className={paginationClassName}>
      <PaginationContent className="flex justify-center gap-2">
        <PaginationItem>
          <PaginationPrevious
            className={btnPrev}
            onClick={() => {
              onPageChange(Math.max(currentPage - 1, 1))
              setTimeout(() => {
                window.scrollTo({ top: 0 })
              }, 50)
            }}
          />
        </PaginationItem>
        {Array.from({ length: totalPages || 1 }).map((_, i) => {
          const pageNumber = i + 1
          const isCurrent = pageNumber === currentPage
          const isNearCurrent = Math.abs(pageNumber - currentPage) <= 1

          if (isCurrent || isNearCurrent || pageNumber === 1 || pageNumber === totalPages) {
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  isActive={isCurrent}
                  className={`${btnLink} ${isCurrent ? 'text-red-500' : ''}`}
                  onClick={() => {
                    onPageChange(pageNumber)
                    setTimeout(() => {
                      window.scrollTo({ top: 0 })
                    }, 50)
                  }}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          }

          if (pageNumber === 2 || pageNumber === totalPages - 1) {
            return (
              <PaginationItem key={`ellipsis-${pageNumber}`}>
                <PaginationEllipsis className={btnEllipsis} />
              </PaginationItem>
            )
          }

          return null
        })}
        <PaginationItem>
          <PaginationNext
            className={btnNext}
            onClick={() => {
              onPageChange(Math.min(currentPage + 1, totalPages || 1))
              setTimeout(() => {
                window.scrollTo({ top: 0 })
              }, 50)
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
