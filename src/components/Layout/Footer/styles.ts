import { css } from '@emotion/core'

export default {
  footer: css({
    marginTop: '5.0rem',
    borderTop: '1px solid #ddd',
    padding: '0.6rem 2.0rem',
  }),

  inner: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',

    '& > *': {
      marginLeft: 8,
      marginRight: 8,
    },
    '& > a': {
      color: '#aaa',
      textDecoration: 'none',
    },
    '& > a:hover': {
      color: '#000',
      textDecoration: 'none',
    },
  }),
}
