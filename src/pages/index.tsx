import React from 'react'

import { Layout } from 'components/Layout'
import { Seo } from 'components/Seo'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Profile } from 'components/Profile'
import { ArticleThumbnail } from 'components/Article'
import { Divider } from 'components/Divider'
import { Header } from 'components/Layout/Header'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const IndexPage: React.FC<{}> = () => {
  const { allMdx } = useStaticQuery(graphql`
    query IndexQuery {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___order] }
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
              project
              media {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              techs
              blurb
            }
          }
        }
      }
    }
  `)

  let alternate = true
  const writeups = allMdx.edges.map(({ node }: any) => {
    if (node.frontmatter.media) {
      alternate = !alternate
    }
    return (
      <ArticleThumbnail
        key={node.id}
        title={node.frontmatter.title}
        date={new Date(node.frontmatter.date)}
        showDay={false}
        project={node.frontmatter.project}
        slug={node.frontmatter.slug}
        techs={node.frontmatter.techs}
        media={
          node.frontmatter.media && (
            <Img fluid={node.frontmatter.media.childImageSharp.fluid} />
          )
        }
        alternate={alternate}
      >
        {node.frontmatter.blurb ? (
          <MDXRenderer>{node.frontmatter.blurb}</MDXRenderer>
        ) : (
          <p>{node.excerpt}</p>
        )}
      </ArticleThumbnail>
    )
  })

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
