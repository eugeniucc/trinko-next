import { PostCardProps } from '../types/blog.types'
export const PostCard = ({ title, content }: PostCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  )
}
