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

    '& .title': {
      marginBottom: '0.33em',
      display: 'inline-block',
      position: 'relative',
      marginTop: '0.9rem',
      fontSize: '3rem',
      lineHeight: '3.2rem',
    },

    '@media only screen and (min-width: 40rem)': {
      '&.small .title': {
        fontSize: '2rem',
        lineHeight: '2.1333rem',
      },
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

  splitThumbnail: css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.0rem',
    gridAutoFlow: 'dense',
    '& .media': {
      alignSelf: 'center',
    },

    '& > :first-child': {
      // Collapse margin between content and read more
      marginBottom: '-1rem',
    },
    '@media only screen and (min-width: 40rem)': {
      gridTemplateColumns: '1fr 1fr',
      '&.alternate > :first-child': {
        gridColumn: 2,
      },
      '&.alternate > :last-child': {
        gridColumn: 2,
      },
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

  metadata: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '-1rem',
  }),

  linkList: css({
    display: 'flex',
    flexDirection: 'row',
  }),
}
