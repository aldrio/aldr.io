import { css } from '@emotion/core'

export default {
  article: css({
    '& h2': {
      marginTop: '2.5rem',
    },

    '& blockquote': {
      marginLeft: 0,
      paddingLeft: 40,
      borderLeft: '4px solid #8C9D79',
    },
  }),

  header: css({
    textDecoration: 'none',

    transition: 'color 0.3s ease',
    color: '#333',
    '.thumbnail:hover &, &:hover': {
      color: '#000',
    },

    '& > .date': {
      color: '#888',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
    },
    '.thumbnail:hover & > .date, &:hover > .date': {
      color: '#333',
    },

    '& .title': {
      marginTop: '0.9rem',
      fontSize: '3rem',
      lineHeight: '3.2rem',
    },
  }),

  thumbnail: css({
    display: 'block',
    textDecoration: 'none',
    marginBottom: '3.5rem',

    color: '#333',
    '&:hover': {
      color: '#000',
    },
  }),

  readMoreLink: css({
    display: 'block',
    textAlign: 'center',
    fontSize: '0.8rem',

    transition: 'color 0.3s ease, transform 0.3s ease',
    color: '#888',
    '.thumbnail:hover &': {
      color: '#333',
      transform: 'scale(1.02)',
    },
  }),
}
