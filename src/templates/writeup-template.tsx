import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout } from 'components/Layout'
import { Seo } from 'components/Seo'
import { Article } from 'components/Article'

export type WriteupTemplateProps = {
  data: any
}

const WriteupTemplate: React.FC<WriteupTemplateProps> = ({ data }) => {
  const { mdx } = data

  return (
    <Layout>
      <Seo title={mdx.frontmatter.title} />
      <Article
        title={mdx.frontmatter.title}
        date={new Date(mdx.frontmatter.date)}
        slug={mdx.frontmatter.slug}
        showDay={false}
        techs={mdx.frontmatter.techs}
      >
        <div>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </Article>
    </Layout>
  )
}

export default WriteupTemplate

export const pageQuery = graphql`
  query WriteupTemplateQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date
        slug
        title
        techs
      }
    }
  }
`
