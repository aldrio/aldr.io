import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'components/Layout'
import { Seo } from 'components/Seo'
import { Article } from 'components/Article'

export type WriteupTemplateProps = {
  data: any
}

const WriteupTemplate: React.FC<WriteupTemplateProps> = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout>
      <Seo title={markdownRemark.frontmatter.title} />
      <Article
        title={markdownRemark.frontmatter.title}
        date={new Date(markdownRemark.frontmatter.date)}
        slug={markdownRemark.frontmatter.slug}
        showDay={false}
      >
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Article>
    </Layout>
  )
}

export default WriteupTemplate

export const pageQuery = graphql`
  query WriteupTemplateQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`
