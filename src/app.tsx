import { Post } from '@/types/post'
import { Header } from './components/header'
import { PostCard } from './components/posts/card'
import { useEffect, useState } from 'react'
import { api } from './lib/api'

export function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [postsCount, setPostsCount] = useState<number>(0)

  const [searchInputValue, setSearchInputValue] = useState<string>('')

  const onChangeSearchInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchInputValue(event.currentTarget.value)
  }

  const publishCountText = `${postsCount} publicaç${postsCount > 1 ? 'ões' : 'ão'}`

  useEffect(() => {
    api
      .get('/search/issues?q=%20repo:wcardosos/github-blog', {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      })
      .then((response) => {
        setPosts(response.data.items)
        setPostsCount(response.data.total_count)
      })
  }, [])

  return (
    <>
      <Header />

      <main className="text-white max-w-[54rem] mx-auto">
        <div className="mt-20">
          <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg text-base-subtitle font-bold">
                Publicações
              </h1>
              <span className="text-sm text-base-span">{publishCountText}</span>
            </div>
            <input
              placeholder="Buscar conteúdo"
              className="bg-base-input placeholder-base-label px-4 py-3 border border-base-border rounded-md outline-none"
              value={searchInputValue}
              onChange={onChangeSearchInput}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12">
            {posts.map((post, index) => (
              <PostCard key={`post-${index}`} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
