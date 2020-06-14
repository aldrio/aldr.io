import React from 'react'

import { Layout } from 'components/Layout'
import { Seo } from 'components/Seo'
import { useStaticQuery, graphql, Link } from 'gatsby'

const IndexPage: React.FC<{}> = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query IndexQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date
              slug
              title
            }
          }
        }
      }
    }
  `)

  const writeups = allMarkdownRemark.edges.map((edge: any) => (
    <Link key={edge.node.id} to={`/${edge.node.frontmatter.slug}`}>
      {edge.node.frontmatter.title}
    </Link>
  ))

  return (
    <Layout>
      <Seo title="Home" />
      {writeups}
    </Layout>
  )
}

export default IndexPage
