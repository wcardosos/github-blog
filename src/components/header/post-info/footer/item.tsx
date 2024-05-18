interface Props {
  text: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
}

export function ProfileCardFooterItem({ text, icon: Icon }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <Icon className="text-base-label w-4 h-4" />
      <span className="text-base-subtitle">{text}</span>
    </div>
  )
}
