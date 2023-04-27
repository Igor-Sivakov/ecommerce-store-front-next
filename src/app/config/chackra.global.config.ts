import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: 'black',
        letterSpacing: '0.05em',
        fontWeight: 300,
      },
    },
  },
})