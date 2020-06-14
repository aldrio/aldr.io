import React from 'react'
import styles from './styles'

export type DividerProps = {
  label?: string
}

export const Divider: React.FC<DividerProps> = ({ label }) => {
  return (
    <div css={styles.divider}>
      <div css={styles.line} />
      {label && <span css={styles.label}>{label}</span>}
      <div css={styles.line} />
    </div>
  )
}
