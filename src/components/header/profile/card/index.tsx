import { ProfileCardFooter } from './footer'
import { ProfileCardHeader } from './header'
import { useProfile } from '@/hooks/use-profile'

export function ProfileCard() {
  const profile = useProfile()

  return (
    <div className="bg-base-profile max-w-[54rem] w-full py-8 px-10 flex gap-8 rounded-[0.625rem] shadow-md">
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
