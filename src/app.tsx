import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/header'
import { Router } from './router'

export function App() {
  return (
    <>
      <Header />

      <main className="text-white max-w-[54rem] mx-auto">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </main>
    </>
  )
}
