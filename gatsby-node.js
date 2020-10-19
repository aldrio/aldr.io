/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsConfigPathsPlugin()],
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const WriteupTemplate = require.resolve(
    './src/templates/writeup-template.tsx'
  )

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: WriteupTemplate,
      context: {
        id: node.id,
      },
    })
  })
}

exports.createSchemaCustomization = ({
  actions: { createFieldExtension, createTypes },
  createContentDigest,
}) => {
  // snippet from gatsby-plugin-mdx-frontmatter
  createFieldExtension({
    name: 'mdx',
    extend() {
      return {
        type: 'String',
        resolve(source, args, context, info) {
          // Grab field
          const value = source[info.fieldName]
          if (!value) {
            return null
          }
          // Isolate MDX
          const mdxType = info.schema.getType('Mdx')
          // Grab just the body contents of what MDX generates
          const { resolve } = mdxType.getFields().body

          return resolve(
            {
              rawBody: value,
              internal: {
                contentDigest: createContentDigest(value), // Used for caching
              },
            },
            args,
            context,
            info
          )
        },
      }
    },
  })

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      order: Int
      slug: String!
      date: String!
      title: String!
      listed: Boolean
      project: Boolean
      blurb: String @mdx
      techs: [String!]
      media: File
      siteUrl: String
      sourceUrl: String
    }
  `)
}
