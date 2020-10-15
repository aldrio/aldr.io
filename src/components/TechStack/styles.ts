import { css } from '@emotion/core'

export default {
  techStack: css({
    position: 'relative',
    display: 'block',
    flexWrap: 'wrap',
    marginTop: '1rem',
    marginBottom: '1rem',
  }),

  tech: css({
    display: 'inline-block',
    margin: '0.125rem',
    paddingLeft: '0.25rem',
    paddingRight: '0.25rem',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    backgroundColor: '#C6F6D5',
    borderRadius: '0.2rem',
    alignItems: 'center',
    color: '#22543D',
    '& path': {
      fill: '#22543D',
    },
  }),

  logo: css({
    height: '0.7rem',
    width: 'auto',
    marginRight: '0.25rem',
    opacity: 0.7,
  }),
}
