import { styled, theme } from 'stitches.config'

export const HomeContainer = styled('div', {
  ai: 'center',
  border: `1px solid ${theme.colors.gray600}`,
  br: 8,
  d: 'flex',
  fd: 'column',
  gap: '1rem',
  jc: 'center',
  left: '50%',
  maxWidth: 820,
  pd: '2rem',
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',

  h1: {
    fontSize: '2rem',
  },

  strong: {
    color: '$gray150',
    fontSize: '1rem',

    'a:hover': {
      background: '$cyan300',
      color: '$gray50',
      textDecoration: 'underline',
    },
  },
})

export const ContentBox = styled('div', {
  d: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(2, 1fr)',
})
