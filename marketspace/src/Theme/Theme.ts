import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    blue: {
      100: '#647AC71A',
      500: '#364D9D',
      400: '#647AC7',
    },

    redLight: '#EE7979',

    gray: {
      700: '#F7F7F8',
      600: '#EDECEE',
      500: '#D9D8DA',
      400: '#9F9BA1',
      300: '#5F5B62',
      200: '#3E3A40',
      100: '#1A181B',
    },
  },
  fonts: {
    heading: 'Karla_700Bold',
    body: 'Karla_400Regular',
  },
  space: {
    61: 244,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
})
