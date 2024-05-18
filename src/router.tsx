import { Route, Routes } from 'react-router-dom'
import { Home } from './views/home'
import { Post } from './views/post'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:postId',
    element: <Post />,
  },
]

export function Router() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}
