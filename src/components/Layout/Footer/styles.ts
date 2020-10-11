import { css } from '@emotion/core'

export default {
  footer: css({
    marginTop: '5.0rem',
    padding: '0.6rem 2.0rem',
    borderTop: '1px solid #ddd',
    '.dark-theme &': {
      borderTop: '1px solid #666',
    },
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
      color: 'var(--theme-colors-text-lightest)',
      textDecoration: 'none',
    },
    '& > a:hover': {
      color: 'var(--theme-colors-text-dark)',
      textDecoration: 'none',
    },
  }),
}
