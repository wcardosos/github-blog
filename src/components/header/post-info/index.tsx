import { Post } from '@/types/post'
import { PostInfoCardFooter } from './footer'
import { PostInfoCardHeader } from './header'
import { useProfile } from '@/hooks/use-profile'

interface Props {
  post: Post
  issueUrl: string
}

export function PostInfo({ post, issueUrl }: Props) {
  const profile = useProfile()

  return (
    <div className="bg-base-profile max-w-[54rem] w-full py-8 px-10 flex flex-col gap-8 rounded-[0.625rem] shadow-md">
      <PostInfoCardHeader issueUrl={issueUrl} />
      <strong className="text-base-title text-2xl">{post.title}</strong>
      <PostInfoCardFooter
        username={profile.login}
        createdAt={new Date(post.created_at)}
        comments={post.comments}
      />
    </div>
  )
}
