import { css } from '@emotion/core'

export const FADE_OVERLAY_Z_INDEX = 100

export default {
  pageWrapper: css({
    position: 'relative',
  }),

  fadeOverlay: css({
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    zIndex: FADE_OVERLAY_Z_INDEX,
    pointerEvents: 'none',
  }),
}
