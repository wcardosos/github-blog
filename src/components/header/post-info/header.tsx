import ExternalLink from '@/assets/icons/external-link'
import { Link } from 'react-router-dom'
import ArrowLeft from '@/assets/icons/arrow-left'

interface Props {
  issueUrl: string
}

export function PostInfoCardHeader({ issueUrl }: Props) {
  return (
    <div className="flex justify-between">
      <Link to="/" className="flex gap-2 text-blue items-center">
        <ArrowLeft className="w-3 h-3" />
        <span className="text-xs font-bold">VOLTAR</span>
      </Link>
      <a
        href={issueUrl}
        target="_blank"
        className="text-blue flex items-center gap-2"
        rel="noreferrer"
      >
        <strong className="text-xs">VER NO GITHUB</strong>
        <ExternalLink className="w-3 h-3 text-blue" />
      </a>
    </div>
  )
}
