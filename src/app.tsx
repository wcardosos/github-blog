import { Post } from '@/types/post'
import { Header } from './components/header'
import { PostCard } from './components/posts/card'
import { useState } from 'react'

const posts: Post[] = [
  {
    title: 'JavaScript data types and data structures',
    createdAt: new Date('2024-04-14 06:00'),
    text: `
    Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

    Dynamic typing
    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
    
    let foo = 42; // foo is now a number
    foo = 'bar'; // foo is now a string
    foo = true; // foo is now a boolean
    `,
  },
  {
    title: 'JavaScript data types and data structures',
    createdAt: new Date('2024-04-12 06:00'),
    text: `
    Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

    Dynamic typing
    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
    
    let foo = 42; // foo is now a number
    foo = 'bar'; // foo is now a string
    foo = true; // foo is now a boolean
    `,
  },
]

export function App() {
  const [searchInputValue, setSearchInputValue] = useState<string>('')
  const [postsFiltered, setPostsFiltered] = useState(posts)

  const onChangeSearchInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchInputValue(event.currentTarget.value)

    const newPostsFiltered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchInputValue.toLowerCase()),
    )

    setPostsFiltered(newPostsFiltered)
  }

  const publishCount = posts.length
  const publishCountText = `${publishCount} publicaç${publishCount > 1 ? 'ões' : 'ão'}`

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
            {postsFiltered.map((post, index) => (
              <PostCard key={`post-${index}`} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
