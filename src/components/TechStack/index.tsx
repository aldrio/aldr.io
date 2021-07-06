import React, { SVGProps } from 'react'
import styles from './styles'

import DockerLogo from './logos/Docker'
import GraphQLLogo from './logos/GraphQL'
import KubernetesLogo from './logos/Kubernetes'
import PostgreSQLLogo from './logos/PostgreSQL'
import ReactJsLogo from './logos/React.js'
import TypeGraphQLLogo from './logos/TypeGraphQL'
import TypeScriptLogo from './logos/TypeScript'
import WebRTCLogo from './logos/WebRTC'
import PythonLogo from './logos/Python'
import NixLogo from './logos/Nix'
import GcpLogo from './logos/Gcp'

export const TechNames = [
  'Docker',
  'GraphQL',
  'Kubernetes',
  'Objection.js',
  'PostgreSQL',
  'React.js',
  'TypeGraphQL',
  'TypeScript',
  'WebRTC',
  'Python',
  'Nix',
  'GCP',
] as const

export type TechName = typeof TechNames[number]
type Tech = {
  Logo?: React.FunctionComponent<SVGProps<SVGSVGElement>>
  lightColor?: string
  darkColor?: string
}
const Techs: Record<TechName, Tech> = {
  Docker: { Logo: DockerLogo, darkColor: '#0db7ed', lightColor: '#cef1fc' },
  GraphQL: {
    Logo: GraphQLLogo,
    darkColor: '#cc128f',
    lightColor: '#f9d7ee',
  },
  Kubernetes: {
    Logo: KubernetesLogo,
    darkColor: '#326ce5',
    lightColor: '#d6e2f9',
  },
  'Objection.js': {
    lightColor: '#f8efdc',
    darkColor: '#b5892b',
  },
  PostgreSQL: {
    Logo: PostgreSQLLogo,
    darkColor: '#008bb9',
    lightColor: '#bfefff',
  },
  'React.js': {
    Logo: ReactJsLogo,
    lightColor: '#e0f7fe',
    darkColor: '#0b9fc6',
  },
  TypeGraphQL: {
    Logo: TypeGraphQLLogo,
    darkColor: '#2468ae',
    lightColor: '#cee1f4',
  },
  TypeScript: {
    Logo: TypeScriptLogo,
    lightColor: '#d5e4f4',
    darkColor: '#3178c6',
  },
  WebRTC: {
    Logo: WebRTCLogo,
    lightColor: '#f5cecc',
    darkColor: '#B22722',
  },
  Python: {
    Logo: PythonLogo,
    lightColor: '#FFEFB9',
    darkColor: '#C39A13',
  },
  Nix: {
    Logo: NixLogo,
    lightColor: '#D8E6F0',
    darkColor: '#5277C3',
  },
  GCP: {
    Logo: GcpLogo,
    lightColor: '#FFEFC1',
    darkColor: '#D59E00',
  },
}

export type TechStackProps = {
  techs: TechName[]
  className?: string
}

export const TechStack: React.FC<TechStackProps> = ({ techs, className }) => {
  return (
    <div css={styles.techStack} className={className}>
      {techs.map((tech) => {
        const { Logo, lightColor, darkColor } = Techs[tech]
        return (
          <div
            key={tech}
            css={[
              styles.tech,
              {
                '&, & path': {
                  color: darkColor,
                  fill: darkColor,
                  backgroundColor: lightColor,
                },
                '.dark-theme &, .dark-theme & path': {
                  color: 'white',
                  fill: 'white',
                  backgroundColor: darkColor,
                },
              },
            ]}
          >
            {Logo && <Logo aria-label={tech} key={tech} css={styles.logo} />}
            <span>{tech}</span>
          </div>
        )
      })}
    </div>
  )
}
