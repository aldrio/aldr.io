import { css } from '@emotion/core'

export default {
  link: css({
    display: 'block',
    marginTop: '1.0em',
    marginLeft: '0.5em',
    color: 'var(--theme-colors-text-light)',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'var(--theme-colors-text)',
    },
  }),
}
