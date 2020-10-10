import React from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './styles'
import { useLocation } from '@reach/router'

export { FADE_OVERLAY_Z_INDEX } from './styles'

export type RootProps = {}

export const Root: React.FC<RootProps> = ({ children }) => {
  const location = useLocation()
  const {
    site: {
      siteMetadata: { pageTransitionMs },
    },
  } = useStaticQuery(graphql`
    query RootQuery {
      site {
        siteMetadata {
          pageTransitionMs
        }
      }
    }
  `)

  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <div key={location.pathname} css={styles.pageWrapper}>
          <motion.div
            css={styles.fadeOverlay}
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                duration: pageTransitionMs / 1000,
                delay: pageTransitionMs / 1000,
              },
            }}
            exit={{
              opacity: 1,
              transition: { duration: pageTransitionMs / 1000 },
            }}
          />
          {children}
        </div>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Root
