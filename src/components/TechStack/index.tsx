import React from 'react'
import styles from './styles'

export const TechNames = [
  'Docker',
  'GraphQL',
  'Kubernetes',
  'Objection.js',
  'PostgreSQL',
  'React.js',
  'TypeGraphQL',
  'TypeScript',
] as const

export type TechName = typeof TechNames[number]

export type TechStackProps = {
  techs: TechName[]
}

export const TechStack: React.FC<TechStackProps> = ({ techs }) => {
  return (
    <div css={styles.techStack}>
      {techs.map((tech) => (
        <img
          key={tech}
          src={require(`./logos/${tech}.png`)}
          alt={tech}
          css={styles.logo}
        />
      ))}
    </div>
  )
}
