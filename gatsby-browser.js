/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
  prevRouterProps: { location: prevLocation },
}) => {
  const pos = getSavedScrollPosition(location) || [0, 0]

  if (location.pathname !== prevLocation.pathname) {
    global.___prepareScroll && global.___prepareScroll(...pos)
  }

  window.scrollTo(...pos)

  return false
}
