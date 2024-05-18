import { calculateDaysFromPostCreation } from '@/lib/date'
import { Post } from '@/types/post'

interface Props {
  post: Post
}

export function PostCard({ post }: Props) {
  const postCreatedAtDaysUntilNow = calculateDaysFromPostCreation(
    new Date(post.created_at),
  )
  const dateText = `${postCreatedAtDaysUntilNow} dia${postCreatedAtDaysUntilNow > 1 ? 's' : ''}`
  return (
    <article className="bg-base-post p-8 rounded-[10px]">
      <div className="flex gap-4 items-start justify-between">
        <strong className="font-bold text-xl text-base-title">
          {post.title}
        </strong>
        <span className="text-sm text-base-span min-w-fit">Há {dateText}</span>
      </div>
      <p className="text-ellipsis overflow-hidden line-clamp-4 mt-5 text-base-text">
        {post.body}
      </p>
    </article>
  )
}
