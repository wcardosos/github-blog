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
        d="M12.375 2.875V4.75h7.5V2.875a1.874 1.874 0 113.75 0V4.75h2.813a2.813 2.813 0 012.812 2.813v2.812H3V7.562A2.812 2.812 0 015.813 4.75h2.812V2.875a1.874 1.874 0 113.75 0zM3 12.25h26.25v15.938A2.813 2.813 0 0126.437 31H5.813A2.813 2.813 0 013 28.187V12.25zM7.688 16a.939.939 0 00-.938.938v5.625c0 .515.42.937.938.937h5.625a.94.94 0 00.937-.938v-5.625a.94.94 0 00-.938-.937H7.689z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgComponent
