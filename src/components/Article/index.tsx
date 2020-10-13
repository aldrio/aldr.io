import React from 'react'
import styles from './styles'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useVisibleTransition } from 'utils/page-transition'
import { TechName, TechStack } from 'components/TechStack'

export type ArticleProps = {
  slug: string
  title: string
  subTitle?: string
  date?: Date
  showDay?: boolean
  noLink?: boolean
  noAnimateBody?: boolean
  small?: boolean
  techs?: TechName[]
}

export const Article: React.FC<ArticleProps> = ({
  slug,
  title,
  subTitle,
  date,
  showDay = true,
  noLink = false,
  noAnimateBody = false,
  small = false,
  techs,
  children,
}) => {
  const [inViewRef, inView] = useInView({ initialInView: true })
  const exit = useVisibleTransition(slug)

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: showDay ? 'numeric' : undefined,
  }

  const Header = noLink ? `div` : Link

  return (
    <article className={small ? 'small' : undefined} css={styles.article}>
      <Header to={`/${slug}`} css={styles.header} ref={inViewRef as any}>
        {date && (
          <span className="date">
            {date.toLocaleDateString('en-US', dateOptions)}
          </span>
        )}
        <div>
          <motion.h1
            className="title"
            // Only animate if it's in the view
            key={inView ? `article-${slug}-title` : undefined}
            layoutId={inView ? `article-${slug}-title` : undefined}
            exit={inView ? exit : undefined}
          >
            {title}
          </motion.h1>
        </div>
        {subTitle && <h2>{subTitle}</h2>}
      </Header>
      <motion.div
        initial={noAnimateBody ? undefined : { y: 32 }}
        animate={
          noAnimateBody ? undefined : { y: 0, transition: { duration: 0.5 } }
        }
      >
        {techs ? <TechStack techs={techs} /> : null}
        {children}
      </motion.div>
    </article>
  )
}

export type ArticleThumbnailProps = {
  media?: JSX.Element
  alternate?: boolean
} & ArticleProps

export const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({
  media,
  techs,
  children,
  alternate = false,
  ...props
}) => {
  const article = (
    <Article noLink noAnimateBody small={!!media} {...props}>
      {children}
      {techs ? <TechStack techs={techs} /> : null}
    </Article>
  )

  return (
    <Link
      to={`/${props.slug}`}
      css={[styles.thumbnail, media && styles.splitThumbnail]}
      className={`thumbnail ${alternate && 'alternate'}`}
    >
      {article}
      {media && <div className="media">{media}</div>}
      <span css={styles.readMoreLink}>Read More</span>
    </Link>
  )
}
