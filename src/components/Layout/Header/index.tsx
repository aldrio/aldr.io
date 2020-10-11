import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styles from './styles'
import { ThemeToggle } from 'components/ThemeToggle'

export type HeaderProps = {
  minimal?: boolean
}

export const Header: React.FC<HeaderProps> = ({ minimal = false }) => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Twitter emojis
  const emojis = [
    'https://twemoji.maxcdn.com/v/13.0.0/72x72/1f61c.png', // 🤪
    'https://twemoji.maxcdn.com/v/13.0.0/72x72/270c.png', // ✌
    'https://twemoji.maxcdn.com/v/13.0.0/72x72/1f32a.png', // 🌪
    'https://twemoji.maxcdn.com/v/13.0.0/72x72/1f3b5.png', // 🎶
    'https://twemoji.maxcdn.com/v/13.0.0/72x72/1f304.png', // 🌄
    'https://twemoji.maxcdn.com/v/13.0.0/72x72/1f9ca.png', // 🧊
    'https://twemoji.maxcdn.com/v/13.0.0/72x72/1f4bb.png', // 💻
    'https://twemoji.maxcdn.com/v/13.0.0/72x72/1f44b.png', // 👋
  ]

  const [emojiIndex, setEmojiIndex] = useState(0)

  return (
    <header css={[styles.header, minimal && styles.minimalHeader]}>
      <div css={styles.inner}>
        {!minimal ? (
          <Link
            to="/"
            css={styles.brandLink}
            onMouseEnter={() => setEmojiIndex(emojiIndex + 1)}
          >
            <div className="logo">
              <img src={emojis[emojiIndex % emojis.length]} alt="Logo" />
            </div>
            <span className="title">{site.siteMetadata.title}</span>
          </Link>
        ) : (
          <div />
        )}
        <ThemeToggle />
      </div>
    </header>
  )
}
