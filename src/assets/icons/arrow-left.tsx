function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 31c-.549 0-1.097-.21-1.515-.628L7.628 17.515a2.142 2.142 0 010-3.03L20.485 1.628a2.142 2.142 0 113.03 3.03L12.173 16l11.343 11.344A2.142 2.142 0 0122 31z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgComponent
