import { GithubProfile } from '@/types/profile'
import { useEffect, useState } from 'react'
import { ProfileCardFooter } from './footer'
import { ProfileCardHeader } from './header'

export function ProfileCard() {
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
    <div className="bg-base-profile w-[54rem] py-8 px-10 flex gap-8 rounded-[0.625rem] shadow-md">
      <img
        src="https://github.com/wcardosos.png"
        className="w-36 h-36 rounded-lg"
        alt=""
      />
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2 flex-1">
          <ProfileCardHeader
            name={profile.name}
            profileUrl={profile.html_url}
          />
          <p className="text-base-text">{profile.bio}</p>
        </div>
        <ProfileCardFooter
          username={profile.login}
          company={profile.company}
          followers={profile.followers}
        />
      </div>
    </div>
  )
}
