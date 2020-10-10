import { css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

import 'typeface-karla'
import 'typeface-lato'

export default {
  global: css`
    ${emotionNormalize}
    html,
    body,
    #___gatsby {
      padding: 0;
      margin: 0;
      background: #fff;
      min-height: 100vh;
      font-family: Lato, Helvetica, Arial, sans-serif;
      font-size: 20px;
      line-height: 1.5rem;
      color: #333;
      overflow-x: hidden;
    }

    @media only screen and (max-width: 600px) {
      html,
      body,
      #___gatsby {
        font-size: 18px;
      }
    }

    h1 {
      font-family: Karla, Helvetica, Arial, sans-serif;
    }

    a {
      outline: 0;
      transition: color 0.3s ease;
      color: #6d8355;
    }

    a:hover {
      color: #8c9d79;
    }
  `,

  layout: css({
    minHeight: '100vh',
    borderTop: '4px solid #8C9D79',
  }),

  content: css({
    margin: '0 auto',
    maxWidth: '40rem',
    padding: '0 1.0875rem 1.45rem',
  }),
}
