import { useCallback } from 'react'

export const PAGE_TRANSITION_TIME = 0.15
export const PAGE_TRANSITION_TIME_MS = PAGE_TRANSITION_TIME * 1000

export const PAGE_TRANSITION_Z_INDEX = 100

/**
 * Allows a component to show above the fade out/fade in of a page transition
 *
 * Returns a framer motion custom exit prop.
 *
 * Relies on z-index so be sure to set position to something other than static
 *
 * @param pathname pathname relevant to this transition
 * @param defaultZIndex zIndex to use if not relevant to transition
 */
export const useVisibleTransition = (
  pathname: string,
  defaultZIndex: number = 0
) => {
  return useCallback(
    (custom: [string, string]) =>
      custom.includes(pathname)
        ? { zIndex: PAGE_TRANSITION_Z_INDEX + 1 }
        : { zIndex: defaultZIndex },
    [pathname, defaultZIndex]
  )
}
