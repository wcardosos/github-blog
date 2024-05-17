import { Route, Routes } from 'react-router-dom'
import { Home } from './views/home'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:postId',
    element: <div>post</div>,
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
