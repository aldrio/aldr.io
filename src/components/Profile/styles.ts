import { css } from '@emotion/core'

export default {
  profile: css({
    paddingTop: '10vh',
    paddingBottom: '3.5rem',

    '& h1': {
      fontSize: '5.0rem',
      lineHeight: '5.0rem',
      textAlign: 'center',
      marginTop: '1.6rem',
      marginBottom: '0rem',
    },
    '& h2': {
      width: '80%',
      marginRight: 'auto',
      marginLeft: 'auto',
      fontSize: '2.0rem',
      lineHeight: '2.0rem',
      textAlign: 'center',
      marginTop: '1.0rem',
      color: 'var(--theme-colors-text-light)',
    },
    '@media only screen and (max-width: 600px)': {
      '& h1': {
        fontSize: '4.0rem',
        lineHeight: '4.0rem',
      },
      '& h2': {
        fontSize: '1.5rem',
        lineHeight: '1.5rem',
      },
    },
  }),

  link: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    textDecoration: 'none',
    color: 'var(--theme-colors-text)',
    '.dark-theme &': {
      color: '#ececec',
    },
    '&:hover': {
      color: 'var(--theme-colors-text-dark)',
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
    width: '2rem',
    height: '2rem',

    '& > svg': {
      width: '2rem',
      height: '2rem',
      transition: 'fill 0.3s ease, transform 0.3s ease',
      transform: 'scale(1.0)',
      opacity: 0.85,
      fill: 'var(--theme-colors-text)',
    },
    '&:hover > svg': {
      opacity: 1.0,
      transform: 'scale(1.05)',
      fill: 'var(--theme-colors-text-dark)',
    },
  }),
}
