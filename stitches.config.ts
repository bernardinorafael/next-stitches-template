import { createStitches, type PropertyValue } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray900: '#161616',
      gray800: '#1c1c1c',
      gray700: '#232323',
      gray600: '#282828',
      gray500: '#2e2e2e',
      gray400: '#343434',
      gray300: '#3e3e3e',
      gray200: '#505050',
      gray150: '#707070',
      gray100: '#7e7e7e',
      gray50: '#ededed',

      cyan900: '#07191d',
      cyan800: '#061e24',
      cyan700: '#072830',
      cyan600: '#07303b',
      cyan500: '#073844',
      cyan400: '#064150',
      cyan300: '#045063',
      cyan200: '#00647d',
      cyan150: '#05a2c2',
      cyan100: '#00b1cc',

      red900: '#1f1315',
      red800: '#291415',
      red700: '#3c181a',
      red600: '#481a1d',
      red500: '#541b1f',
      red400: '#671e22',
      red300: '#822025',
      red200: '#aa2429',
      red150: '#e5484d',
      red100: '#ff6369',
    },
  },

  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },

  utils: {
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),

    mx: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),

    my: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    pd: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),

    px: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),

    py: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),

    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    c: (value: PropertyValue<'color'>) => ({
      color: value,
    }),

    bs: (value: PropertyValue<'boxShadow'>) => ({
      boxShadow: value,
    }),

    d: (value: PropertyValue<'display'>) => ({
      display: value,
    }),

    ai: (value: PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),

    jc: (value: PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),

    fd: (value: PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
  },
})
