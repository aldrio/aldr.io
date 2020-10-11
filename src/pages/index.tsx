import React from 'react'

import { Layout } from 'components/Layout'
import { Seo } from 'components/Seo'
import { useStaticQuery, graphql } from 'gatsby'
import { Profile } from 'components/Profile'
import { ArticleThumbnail } from 'components/Article'
import { Divider } from 'components/Divider'
import { Header } from 'components/Layout/Header'

const IndexPage: React.FC<{}> = () => {
  const { allMdx } = useStaticQuery(graphql`
    query IndexQuery {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { listed: { ne: false } } }
      ) {
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

  const writeups = allMdx.edges.map(({ node }: any) => (
    <ArticleThumbnail
      key={node.id}
      title={node.frontmatter.title}
      date={new Date(node.frontmatter.date)}
      slug={node.frontmatter.slug}
      showDay={false}
    >
      <div>
        <p>{node.excerpt}</p>
      </div>
    </ArticleThumbnail>
  ))

  return (
    <>
      <Header minimal />
      <Layout noHeader>
        <Seo />
        <Profile />
        <Divider label="Writeups" />
        {writeups}
      </Layout>
    </>
  )
}

export default IndexPage
