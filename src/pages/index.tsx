import React from 'react'

import { Layout } from 'components/Layout'
import { Seo } from 'components/Seo'
import { useStaticQuery, graphql } from 'gatsby'
import { Profile } from 'components/Profile'
import { ArticleThumbnail } from 'components/Article'
import { Divider } from 'components/Divider'

const IndexPage: React.FC<{}> = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query IndexQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250, format: HTML)
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
    <ArticleThumbnail
      key={edge.node.id}
      title={edge.node.frontmatter.title}
      date={new Date(edge.node.frontmatter.date)}
      slug={edge.node.frontmatter.slug}
    >
      <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
    </ArticleThumbnail>
  ))

  return (
    <Layout noHeader>
      <Seo />
      <Profile />
      <Divider label="Writeups" />
      {writeups}
    </Layout>
  )
}

export default IndexPage
