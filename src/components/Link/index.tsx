import React from 'react'
import styles from './styles'

import Globe from './icons/Globe'
import SourceCode from './icons/SourceCode'
import External from './icons/External'

export type LinkIconProps = {
  className?: string
  href: string
  icon?: 'other' | 'source-code' | 'site'
  hoverText?: string
}

export const LinkIcon: React.FC<LinkIconProps> = ({
  className,
  href,
  icon = 'other',
  hoverText,
}) => {
  let Icon
  if (icon === 'site') {
    Icon = External
  } else if (icon === 'source-code') {
    Icon = SourceCode
  } else {
    Icon = Globe
  }

  return (
    <a
      href={href}
      title={hoverText}
      css={styles.link}
      className={className}
      target="_blank"
    >
      <Icon width="1.5rem" height="1.5rem" />
    </a>
  )
}
