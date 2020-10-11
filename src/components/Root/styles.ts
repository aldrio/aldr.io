import { css } from '@emotion/core'
import { PAGE_TRANSITION_Z_INDEX } from 'utils/page-transition'
import emotionNormalize from 'emotion-normalize'

import 'typeface-karla'
import 'typeface-lato'

export default {
  global: css`
    ${emotionNormalize}

    body, .light-theme {
      --theme-colors-primary-light: #8c9d79;
      --theme-colors-primary: #6d8355;

      --theme-colors-background: #fff;

      --theme-colors-text-lightest: #aaa;
      --theme-colors-text-light: #888;
      --theme-colors-text: #333;
      --theme-colors-text-dark: #000;
    }

    .dark-theme {
      --theme-colors-primary: #6d8355;
      --theme-colors-primary-light: #8c9d79;

      --theme-colors-background: #171717;

      --theme-colors-text-lightest: #808080;
      --theme-colors-text-light: #a0a0a0;
      --theme-colors-text: #ccc;
      --theme-colors-text-dark: #fff;
    }

    * {
      transition: color 0.5s, background-color 0.5s, border-color 0.5s;
    }

    html,
    body,
    #___gatsby {
      padding: 0;
      margin: 0;
      background: var(--theme-colors-background);
      min-height: 100vh;
      font-family: Lato, Helvetica, Arial, sans-serif;
      font-size: 20px;
      line-height: 1.5rem;
      color: var(--theme-colors-text);
      overflow-x: hidden;
    }

    @media only screen and (max-width: 600px) {
      html,
      body,
      #___gatsby {
        font-size: 18px;
      }
    }

    body {
      border-top: 4px solid var(--theme-colors-primary);
    }

    h1 {
      font-family: Karla, Helvetica, Arial, sans-serif;
    }

    a {
      outline: 0;
      transition: color 0.3s ease;
      color: var(--theme-colors-primary);
    }

    a:hover {
      color: var(--theme-colors-primary-light);
    }
  `,
  pageWrapper: css({
    position: 'relative',
  }),

  fadeOverlay: css({
    backgroundColor: 'var(--theme-colors-background)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    zIndex: PAGE_TRANSITION_Z_INDEX,
    pointerEvents: 'none',
  }),
}
