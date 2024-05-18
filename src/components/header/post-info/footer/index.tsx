import GitHub from '@/assets/icons/github'
import Calendar from '@/assets/icons/calendar'
import Comment from '@/assets/icons/comment'
import { ProfileCardFooterItem } from './item'
import { calculateDaysFromPostCreation } from '@/lib/date'

interface Props {
  username: string
  createdAt: Date
  comments: number
}

export function PostInfoCardFooter({ username, comments, createdAt }: Props) {
  const postCreatedAtDaysUntilNow = calculateDaysFromPostCreation(createdAt)
  const dateText = `Há ${postCreatedAtDaysUntilNow} dia${postCreatedAtDaysUntilNow > 1 ? 's' : ''}`

  return (
    <div className="flex gap-6">
      <ProfileCardFooterItem text={username} icon={GitHub} />
      <ProfileCardFooterItem text={dateText} icon={Calendar} />
      <ProfileCardFooterItem text={`${comments} comentários`} icon={Comment} />
    </div>
  )
}
