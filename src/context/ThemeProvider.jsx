import React from 'react'
import { ThemeProvider } from 'styled-components'
// $xs: 20rem;
// $sm: 30rem;
// $md: 40rem;
// $lg: 50rem;
// $xl: 60rem;
// $xl2: 70rem;
// $xl3: 80rem;
// $xl4: 90rem;
// $xl5: 100rem;
// $full: 100%;
export const theme = {
  maxWidth: {
    md: '40rem',
    lg: '70rem',
    xl: '80rem'
  },
  breakpoints: {
    md: '(min-width: 40rem)',
    lg: '(min-width: 70rem)',
    xl: '(min-width: 80rem)'
  },
  colors: {
    red: 'rgb(235 33 70)',
    grayTitle: '#494F66',
    graySpan: '#A3ABCC',
    grayParagraph: '#676F8F',
    placeHolder: '#A9AFD9',
    inputBorder: '#C5CBE0',
    acianHover: '#6F7DFF'
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
