import { css } from '@emotion/core'

export default {
  article: css({
    '& h2': {
      marginTop: '2.5rem',
    },

    '& blockquote': {
      marginLeft: 0,
      paddingLeft: 40,
      borderLeft: '4px solid #8C9D79'
    },
  }),

  header: css({
    textDecoration: 'none',

    color: '#333',
    '&:hover': {
      color: '#000',
    },

    '& > .date': {
      color: '#888',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
    },
    '&:hover > .date': {
      color: '#333',
    },

    '& .title': {
      marginTop: '0.9rem',
      fontSize: '3rem',
      lineHeight: '3.2rem',
    },
  }),
}
