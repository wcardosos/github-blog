import logo from '../../assets/images/logo.png'
import cover from '../../assets/images/cover.png'
import { PropsWithChildren } from 'react'

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="relative">
      <img
        src={cover}
        className="w-full h-[18.5rem] absolute top-0 left-0 -z-10"
        alt=""
      />
      <div className="w-full">
        <div className="flex flex-col gap-12 items-center pt-16">
          <img src={logo} className="w-[9.25rem]" alt="" />
          {children}
        </div>
      </div>
    </header>
  )
}
