import React from 'react'
import styles from './styles'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useVisibleTransition } from 'utils/page-transition'

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
  const [inViewRef, inView] = useInView({ initialInView: true })
  const exit = useVisibleTransition(slug)

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: showDay ? 'numeric' : undefined,
  }

  return (
    <article css={styles.article}>
      <Link to={`/${slug}`} css={styles.header} ref={inViewRef as any}>
        {date && (
          <span className="date">
            {date.toLocaleDateString('en-US', dateOptions)}
          </span>
        )}
        <motion.h1
          className="title"
          // Only animate if it's in the view
          key={inView ? `article-${slug}-title` : undefined}
          layoutId={inView ? `article-${slug}-title` : undefined}
          exit={inView ? exit : undefined}
        >
          {title}
        </motion.h1>
        {subTitle && <h2>{subTitle}</h2>}
      </Link>
      <motion.div
        initial={{ y: 32 }}
        animate={{ y: 0, transition: { duration: 0.5 } }}
      >
        {children}
      </motion.div>
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
  const [inViewRef, inView] = useInView({ initialInView: true })
  const exit = useVisibleTransition(slug)

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: showDay ? 'numeric' : undefined,
  }

  return (
    <Link to={`/${slug}`} css={styles.thumbnail} className="thumbnail">
      <article css={styles.article}>
        <div css={styles.header} ref={inViewRef}>
          {date && (
            <span className="date">
              {date.toLocaleDateString('en-US', dateOptions)}
            </span>
          )}
          <motion.h1
            className="title"
            // Only animate if it's in the view
            key={inView ? `article-${slug}-title` : undefined}
            layoutId={inView ? `article-${slug}-title` : undefined}
            exit={inView ? exit : undefined}
          >
            {title}
          </motion.h1>
          {subTitle && <h2>{subTitle}</h2>}
        </div>
        {children}
        <span css={styles.readMoreLink}>Read More</span>
      </article>
    </Link>
  )
}
