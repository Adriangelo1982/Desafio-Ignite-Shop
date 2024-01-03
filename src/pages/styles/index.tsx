import {createStitches} from "@stitches/react"
export const {
    css,
    config,
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
  theme: {
    colors: {
      purple: '#800080',
      blue: '#0000ff',
      green: '#008000',
      red: '#ff0000',
      yellow: '#ffff00',
      white: '#ffffff',

      gray100: '#E1E1E6',
      gray300: '#C4C4CC',
      gray800: '#202024',
      gray900: '#121214',

      green300: '#00b37e',
      green500: '#00875f',
    },
    
    fontSizes: {
      md: '1.25rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
})
