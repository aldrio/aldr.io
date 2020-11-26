import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {/* Do initial theme detection in script here to prevent flash */}
        <script
          key="theme"
          dangerouslySetInnerHTML={{
            __html: `(function () {
              try {
                if (typeof window === 'undefined') {
                  return
                }
                var preferredTheme = localStorage.getItem('preferredTheme');
                if (!preferredTheme) {
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    preferredTheme = 'dark-theme';
                  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    preferredTheme = 'light-theme';
                  } else {
                    preferredTheme = 'light-theme';
                  }
                }
                
                document.body.classList.add(preferredTheme);
              } catch (e) {}
            })();`,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
