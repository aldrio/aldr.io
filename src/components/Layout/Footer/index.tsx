import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styles from './styles'

export type FooterProps = {}

export const Footer: React.FC<FooterProps> = () => {
  const { site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          baseUrl
          githubUrl
          sourceUrl
        }
      }
    }
  `)

  return (
    <footer css={styles.footer}>
      <div css={styles.inner}>
        <Link to="/">{site.siteMetadata.baseUrl}</Link>
        <a target="_blank" href={site.siteMetadata.githubUrl}>
          GitHub
        </a>
        <a target="_blank" href={site.siteMetadata.sourceUrl}>
          Source
        </a>
      </div>
    </footer>
  )
}
