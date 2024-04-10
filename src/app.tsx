import logo from './assets/images/logo.png'
import cover from './assets/images/cover.png'
import { useEffect, useState } from 'react'
import ExternalLink from './assets/icons/external-link'
import GitHub from './assets/icons/github'
import Building from './assets/icons/building'
import Followers from './assets/icons/followers'

interface GithubProfile {
  name: string
  html_url: string
  bio: string
  login: string
  company?: string
  followers: number
}

export function App() {
  const [profile, setProfile] = useState<GithubProfile>({
    name: '',
    html_url: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  })

  useEffect(() => {
    fetch('https://api.github.com/users/wcardosos', {
      method: 'GET',
    }).then((response) => response.json().then((data) => setProfile(data)))
  }, [])

  return (
    <main>
      <header className="relative">
        <img
          src={cover}
          className="w-full h-[18.5rem] absolute top-0 left-0"
          alt=""
        />
        <div className="absolute w-full">
          <div className="flex flex-col gap-12 items-center pt-16">
            <img src={logo} className="w-[9.25rem]" alt="" />
            <div className="bg-base-profile w-[54rem] py-8 px-10 flex gap-8 rounded-[0.625rem] shadow-md">
              <img
                src="https://github.com/wcardosos.png"
                className="w-36 h-36 rounded-lg"
                alt=""
              />
              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex justify-between">
                    <strong className="text-base-title text-2xl">
                      {profile.name}
                    </strong>
                    <a
                      href={profile.html_url}
                      className="text-blue flex items-center gap-2"
                    >
                      <strong className="text-xs">GITHUB</strong>
                      <ExternalLink className="w-3 h-3 text-blue" />
                    </a>
                  </div>
                  <p className="text-base-text">{profile.bio}</p>
                </div>
                <div className="flex gap-6">
                  <div className="flex gap-2 items-center">
                    <GitHub className="text-base-label w-4 h-4" />
                    <span className="text-base-subtitle">{profile.login}</span>
                  </div>
                  {profile.company && (
                    <div className="flex gap-2 items-center">
                      <Building className="text-base-label w-4 h-4" />
                      <span className="text-base-subtitle">
                        {profile.company}
                      </span>
                    </div>
                  )}
                  <div className="flex gap-2 items-center">
                    <Followers className="text-base-label w-4 h-4" />
                    <span className="text-base-subtitle">
                      {profile.followers} seguidores
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  )
}
