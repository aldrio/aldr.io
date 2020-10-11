import { css } from '@emotion/core'

export default {
  toggle: css({
    border: 'none',
    outline: 'none',
    width: '2rem',
    height: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.4rem',
    padding: 8,
    margin: 0,
    cursor: 'pointer',

    transition: 'background-color 0.3s ease',

    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    '&:active': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  }),
}
