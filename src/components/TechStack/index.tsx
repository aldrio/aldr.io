import React, { SVGProps } from 'react'
import styles from './styles'

import DockerLogo from './logos/Docker'
import GraphQLLogo from './logos/GraphQL'
import KubernetesLogo from './logos/Kubernetes'
import ObjectionJsLogo from './logos/Objection.js'
import PostgreSQLLogo from './logos/PostgreSQL'
import ReactJsLogo from './logos/React.js'
import TypeGraphQLLogo from './logos/TypeGraphQL'
import TypeScriptLogo from './logos/TypeScript'

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

const TechLogos: Record<
  TechName,
  React.FunctionComponent<SVGProps<SVGSVGElement>>
> = {
  Docker: DockerLogo,
  GraphQL: GraphQLLogo,
  Kubernetes: KubernetesLogo,
  'Objection.js': ObjectionJsLogo,
  PostgreSQL: PostgreSQLLogo,
  'React.js': ReactJsLogo,
  TypeGraphQL: TypeGraphQLLogo,
  TypeScript: TypeScriptLogo,
}

export type TechStackProps = {
  techs: TechName[]
}

export const TechStack: React.FC<TechStackProps> = ({ techs }) => {
  return (
    <div css={styles.techStack}>
      {techs.map((tech) => {
        const Logo = TechLogos[tech]
        return <Logo aria-label={tech} key={tech} css={styles.logo} />
      })}
    </div>
  )
}
