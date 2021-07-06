import React from 'react'

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="128"
      fill="none"
      viewBox="0 0 160 128"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)" fill="#000">
        <path d="M105.787 35.305l13.827-13.827.922-5.823c-25.197-22.91-65.25-20.313-87.964 5.421-6.31 7.148-10.99 16.059-13.486 25.26l4.952-.697 27.654-4.56 2.135-2.184c12.3-13.51 33.1-15.327 47.303-3.833l4.657.243z" />
        <path d="M139.311 45.93a62.29 62.29 0 00-18.775-30.274L101.13 35.062a34.496 34.496 0 0112.662 27.363v3.445c9.539 0 17.272 7.733 17.272 17.271 0 9.54-7.733 17.078-17.272 17.078H79.201l-3.397 3.687v20.716l3.397 3.251h34.591c24.811.193 45.081-19.569 45.274-44.38a44.926 44.926 0 00-19.755-37.563z" />
        <path d="M44.657 127.873H79.2v-27.654H44.657a16.953 16.953 0 01-7.083-1.552l-4.9 1.503-13.924 13.827-1.213 4.707c7.808 5.896 17.336 9.211 27.12 9.169z" />
        <path d="M44.657 38.167C19.846 38.315-.147 58.55.001 83.36a44.927 44.927 0 0017.536 35.344l20.037-20.037c-8.693-3.928-12.556-14.159-8.628-22.852 3.927-8.692 14.158-12.555 22.85-8.628a17.272 17.272 0 018.629 8.628L80.463 55.78a44.877 44.877 0 00-35.806-17.612z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h159.068v128H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Icon