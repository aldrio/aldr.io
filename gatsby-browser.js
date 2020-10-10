/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const config = require('./gatsby-config.js')

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // Delay based on how long the page takes to transition so it doesn't scoll too soon
  const currentPosition = getSavedScrollPosition(location)

  setTimeout(() => {
    window.scrollTo(...(currentPosition || [0, 0]))
  }, config.siteMetadata.pageTransitionMs)

  return false
}
