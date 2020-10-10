import { css } from '@emotion/core'
import { PAGE_TRANSITION_Z_INDEX } from 'utils/page-transition'

export default {
  pageWrapper: css({
    position: 'relative',
  }),

  fadeOverlay: css({
    backgroundColor: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    zIndex: PAGE_TRANSITION_Z_INDEX,
    pointerEvents: 'none',
  }),
}
