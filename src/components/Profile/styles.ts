import { css } from '@emotion/core'

export default {
  profile: css({
    paddingTop: '10vh',
    paddingBottom: '3.5rem',
  }),

  link: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    textDecoration: 'none',
    color: '#333',
    '&:hover': {
      color: '#000',
    },

    '& > h1': {
      fontSize: '5.0rem',
      lineHeight: '5.0rem',
      textAlign: 'center',
      marginBottom: '1.6rem',
    },
  }),

  links: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& > *': {
      marginLeft: 8,
      marginRight: 8,
    },
  }),

  socialLink: css({
    width: 32,
    height: 32,

    '& > img': {
      width: 32,
      height: 32,
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      opacity: 0.7,
      transform: 'scale(1.0)',
    },
    '&:hover > img': {
      opacity: 1.0,
      transform: 'scale(1.05)',
    },
  }),
}
