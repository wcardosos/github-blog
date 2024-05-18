import GitHub from '@/assets/icons/github'
import Building from '@/assets/icons/building'
import Followers from '@/assets/icons/followers'
import { ProfileCardFooterItem } from './item'

interface Props {
  username: string
  company?: string
  followers: number
}

export function ProfileCardFooter({ username, followers, company }: Props) {
  return (
    <div className="flex gap-6">
      <ProfileCardFooterItem text={username} icon={GitHub} />
      {company && <ProfileCardFooterItem text={company} icon={Building} />}
      <ProfileCardFooterItem
        text={`${followers} seguidores`}
        icon={Followers}
      />
    </div>
  )
}
