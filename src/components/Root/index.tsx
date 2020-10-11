import React, { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import styles from './styles'
import { useLocation } from '@reach/router'
import { PAGE_TRANSITION_TIME } from 'utils/page-transition'
import { css, Global } from '@emotion/core'

export type RootProps = {}

export const Root: React.FC<RootProps> = ({ children }) => {
  const location = useLocation()

  // Keep track of previous path to give to custom animations
  const lastPathnameRef = useRef<string | null>()
  useEffect(() => {
    lastPathnameRef.current = location.pathname
  }, [location.pathname])

  // Reposition the page in the window before scrolling so that animations don't appear to jump
  const onPageRef = useCallback((page: HTMLDivElement | null) => {
    if (!page) {
      return
    }

    // Hack to get future scroll position from gatsby-browser.js
    ;(global as any).___prepareScroll = (x: number, y: number) => {
      // "Unscroll" the current page based on scroll diff
      const dx = window.scrollX - x
      const dy = window.scrollY - y

      page.style.top = `${-dy}px`
      page.style.left = `${-dx}px`
    }
  }, [])

  return (
    <>
      <Global styles={styles.global} />
      <AnimateSharedLayout _dependency={location.pathname}>
        <AnimatePresence
          exitBeforeEnter
          custom={[location.pathname, lastPathnameRef.current]}
        >
          <div key={location.pathname} css={styles.pageWrapper} ref={onPageRef}>
            <FadeOverlay />
            {children}
          </div>
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  )
}

export default Root

const FadeOverlay = () => {
  return (
    <>
      {/* Prevent overlay hiding page if js is disabled by hiding it in noscript */}
      <noscript>
        <Global
          styles={css`
            .fade-overlay {
              display: none;
            }
          `}
        />
      </noscript>
      <motion.div
        className="fade-overlay"
        css={styles.fadeOverlay}
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0,
          transition: {
            duration: PAGE_TRANSITION_TIME,
            delay: PAGE_TRANSITION_TIME,
          },
        }}
        exit={{
          opacity: 1,
          transition: { duration: PAGE_TRANSITION_TIME },
        }}
      />
    </>
  )
}
