import { api } from '@/lib/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { type Post } from '@/types/post'
import { Header } from '@/components/header'
import { PostInfo } from '@/components/header/post-info'

export function Post() {
  const [post, setPost] = useState<Post>({} as Post)

  const { postId } = useParams()

  useEffect(() => {
    api.get(`repos/wcardosos/github-blog/issues/${postId}`).then((response) => {
      setPost({
        title: response.data.title,
        body: response.data.body,
        created_at: response.data.created_at,
        number: response.data.number,
        comments: response.data.comments,
        url: response.data.html_url,
      })
    })
  }, [postId])

  return (
    <>
      <Header>
        <PostInfo post={post} issueUrl={post.url} />
      </Header>

      <main className="text-white max-w-[54rem] mx-auto">
        <div className="mt-10 text-base-text">{post.body}</div>
      </main>
    </>
  )
}
