import { styled } from 'stitches.config'

export const CardBox = styled('div', {
  pd: '1rem',
  d: 'flex',
  fd: 'column',

  '> strong': {
    color: '$gray50',
    fontSize: '1.5rem',
  },

  span: {
    color: '$gray200',
  },

  a: {
    marginTop: '1rem',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    d: 'flex',
    ai: 'center',
    gap: '0.225rem',
		lineHeight: 0,

    '&:hover': {
      background: '$cyan300',
      color: '$gray50',
      textDecoration: 'underline',
    },
  },
})
