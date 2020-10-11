import { css } from '@emotion/core'

export default {
  article: css({
    '& h2': {
      marginTop: '2.5rem',
    },

    '& blockquote': {
      marginLeft: 0,
      paddingLeft: 40,
      borderLeft: '4px solid var(--theme-colors-primary)',
    },
  }),

  header: css({
    textDecoration: 'none',

    transition: 'color 0.3s ease',
    color: 'var(--theme-colors-text)',
    '.thumbnail:hover &, &:hover': {
      color: 'var(--theme-colors-text-dark)',
    },

    '& > .date': {
      color: 'var(--theme-colors-text-light)',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
    },
    '.thumbnail:hover & > .date, &:hover > .date': {
      color: 'var(--theme-colors-text)',
    },

    '& .title': {
      position: 'relative',
      marginTop: '0.9rem',
      fontSize: '3rem',
      lineHeight: '3.2rem',
    },
  }),

  thumbnail: css({
    display: 'block',
    textDecoration: 'none',
    marginBottom: '3.5rem',

    color: 'var(--theme-colors-text)',
    '&:hover': {
      color: 'var(--theme-colors-text-dark)',
    },
  }),

  readMoreLink: css({
    display: 'block',
    textAlign: 'center',
    fontSize: '0.8rem',

    transition: 'color 0.3s ease, transform 0.3s ease',
    color: 'var(--theme-colors-text-light)',
    '.thumbnail:hover &': {
      color: 'var(--theme-colors-text)',
      transform: 'scale(1.02)',
    },
  }),
}
