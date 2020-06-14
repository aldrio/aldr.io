import React from 'react'
import styles from './styles'
import { Link } from 'gatsby'

export type ArticleProps = {
  title: string
  subTitle?: string
  date?: Date
  showDay?: boolean
  slug?: string
}

export const Article: React.FC<ArticleProps> = ({
  title,
  subTitle,
  date,
  showDay = true,
  children,
  slug = '',
}) => {
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: showDay ? 'numeric' : undefined,
  }

  return (
    <article css={styles.article}>
      <Link to={`/${slug}`} css={styles.header}>
        {date && (
          <span className="date">
            {date.toLocaleDateString('en-US', dateOptions)}
          </span>
        )}
        <h1 className="title">{title}</h1>
      </Link>
      {subTitle && <h2>{subTitle}</h2>}
      {children}
    </article>
  )
}

export type ArticleThumbnailProps = {
  title: string
  subTitle?: string
  date?: Date
  showDay?: boolean
  slug?: string
}

export const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({
  title,
  subTitle,
  date,
  showDay = true,
  children,
  slug = '',
}) => {
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: showDay ? 'numeric' : undefined,
  }

  return (
    <Link to={`/${slug}`} css={styles.thumbnail} className="thumbnail">
      <article css={styles.article}>
        <div css={styles.header}>
          {date && (
            <span className="date">
              {date.toLocaleDateString('en-US', dateOptions)}
            </span>
          )}
          <h1 className="title">{title}</h1>
          {subTitle && <h2>{subTitle}</h2>}
        </div>
        {children}
        <span css={styles.readMoreLink}>Read More</span>
      </article>
    </Link>
  )
}
