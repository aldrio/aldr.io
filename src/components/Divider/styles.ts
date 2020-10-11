import { css } from '@emotion/core'

export default {
  divider: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3.5rem',
    marginBottom: '1.5rem',
  }),

  line: css({
    flexGrow: 1,
    borderTop: '1px solid #ccc',
    '.dark-theme &': {
      borderTop: '1px solid #555',
    },
  }),

  label: css({
    color: 'var(--theme-colors-text-light)',
    marginLeft: 16,
    marginRight: 16,
  }),
}
