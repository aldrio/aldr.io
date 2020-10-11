import { css } from '@emotion/core'

export default {
  techStack: css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '3.5rem',

    marginRight: '-1.0rem',
    marginLeft: '-1.0rem',
  }),

  logo: css({
    marginBottom: '1.5rem',
    height: '3rem',
    opacity: 0.7,
    width: 'auto',
    marginLeft: '1.0rem',
    marginRight: '1.0rem',
    '&, path': {
      fill: 'var(--theme-colors-text-lightest)',
    },
  }),
}
