import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styles from './styles'

export type HeaderProps = {}

export const Header: React.FC<HeaderProps> = () => {
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
    <header css={styles.header}>
      <div css={styles.inner}>
        {/* <h1 css={styles.title}> */}
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
        {/* <Link to="/" css={styles.brandLink}>
            <div id="hoverthing"></div>
            <span className="title">
              {site.siteMetadata.title}
            </span>
          </Link> */}
        {/* </h1> */}
      </div>
    </header>
  )
}
