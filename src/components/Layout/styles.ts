import { css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

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
      font-family: Helvetica, Arial, sans-serif;
      line-height: 1.5rem;
      color: #333;
    }

    a {
      outline: 0;
      transition: color 0.3s ease;
      color: #6D8355;
    }

    a:hover {
      color: #8C9D79;
    }
  `,

  layout: css({
    minHeight: '100vh',
    borderTop: '4px solid #8C9D79',
  }),
  
  content: css({
    margin: '0 auto',
    maxWidth: 650,
    padding: '0 1.0875rem 1.45rem',
  }),
}
