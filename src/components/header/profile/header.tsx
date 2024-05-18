import ExternalLink from '@/assets/icons/external-link'

interface Props {
  name: string
  profileUrl: string
}

export function ProfileCardHeader({ name, profileUrl }: Props) {
  return (
    <div className="flex justify-between">
      <strong className="text-base-title text-2xl">{name}</strong>
      <a href={profileUrl} className="text-blue flex items-center gap-2">
        <strong className="text-xs">GITHUB</strong>
        <ExternalLink className="w-3 h-3 text-blue" />
      </a>
    </div>
  )
}
