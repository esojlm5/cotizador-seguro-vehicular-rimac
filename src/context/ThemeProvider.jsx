import React from 'react'
import { ThemeProvider } from 'styled-components'

export const theme = {
  breakpoints: {
    md: '(min-width: 40rem)'
  },
  colors: {
    red: 'rgb(235 33 70)',
    grayTitle: '#494F66',
    grayParagraph: '#676F8F',
    placeHolder: '#A9AFD9'
  },
  hover: {
    button: '#EF3340'
  }
}
// export const ThemeContext = createContext(theme)

const ThemeStyled = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeStyled
