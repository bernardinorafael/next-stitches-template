import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    m: 0,
    p: 0,
  },

  body: {
    bg: '$gray900',
    c: '$gray50',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button, select': {
    fontWeight: 500,
    fontSize: '0.875rem',
  },

  a: {
    textDecoration: 'none',
    c: 'inherit',
  },

  button: {
    cursor: 'pointer',
  },
})
