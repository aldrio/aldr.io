import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styles from './styles'
import GitHub from './icons/GitHub'

export type ProfileProps = {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
            githubUrl
          }
        }
      }
    `
  )

  return (
    <div css={styles.profile}>
      <Link to="/" css={styles.link}>
        <h1>{site.siteMetadata.title}</h1>
      </Link>
      <h2>{site.siteMetadata.subtitle}</h2>
      <div css={styles.links}>
        <a
          href={site.siteMetadata.githubUrl}
          target="_blank"
          css={styles.socialLink}
        >
          <GitHub />
        </a>
      </div>
    </div>
  )
}
