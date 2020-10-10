import { css } from '@emotion/core'

export default {
  header: css({
    padding: '1.45rem 2.0rem',
    transition: 'margin-bottom 0.3s ease',
    marginBottom: '5.0rem',

    '@media only screen and (max-width: 722px)': {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '2.0rem',
      maxWidth: 650,
      paddingLeft: '1.0875rem',
      paddingRight: '1.0875rem',
    },
  }),

  inner: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),

  brandLink: css({
    position: 'relative',
    display: 'flex',

    width: 200,
    height: 32,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',

    textDecoration: 'none',

    '& > .logo': {
      position: 'absolute',
      height: 32,
      width: 32,

      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',

      transition: 'opacity 0.3s ease',
      opacity: 0.0,

      '& > img': {
        width: 32,
        height: 32,
      },
    },
    '&:hover > .logo': {
      transition: 'opacity 0.3s ease 0.2s',
      opacity: 1.0,
    },
    '& > .title': {
      position: 'absolute',

      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',

      fontWeight: 'bold',
      fontSize: '1.1rem',
      whiteSpace: 'nowrap',
      color: '#333',

      transition: 'left 0.3s ease 0.2s',
      left: 0,
    },
    '&:hover > .title': {
      transition: 'left 0.3s ease',
      left: 40,
    },
  }),
}
