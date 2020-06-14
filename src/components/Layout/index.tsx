import React from 'react'
import { Header } from './Header'
import { Global } from '@emotion/core'
import styles from './styles'
import { Footer } from './Footer'

export type LayoutProps = {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Global styles={styles.global} />
      <div css={styles.layout}>
        <Header />
        <div css={styles.content}>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}
