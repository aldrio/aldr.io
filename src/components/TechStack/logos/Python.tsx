import React from 'react'

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      fill="none"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#000"
        d="M96 16C96 7.163 81.673 0 64 0 46.327 0 32 7.163 32 16v96c0 8.837 14.327 16 32 16 17.673 0 32-7.163 32-16V16z"
      ></path>
      <path
        fill="#000"
        d="M112 32H16C7.163 32 0 46.327 0 64c0 17.673 7.163 32 16 32h96c8.837 0 16-14.327 16-32 0-17.673-7.163-32-16-32z"
      ></path>
      <path
        fill="#fff"
        d="M46.4 21.92a5.92 5.92 0 100-11.84 5.92 5.92 0 000 11.84zM81.6 117.92a5.92 5.92 0 100-11.84 5.92 5.92 0 000 11.84z"
      ></path>
      <path
        stroke="#fff"
        d="M32 30.4h32M64 97.6h32M30.4 96c0-32 8-32 32-32 27.2 0 35.2 0 35.2-32"
      ></path>
    </svg>
  )
}

export default Icon
