import React, { createContext } from 'react'

export const themes = {
  breakpoints: {
    md: '(min-width: 40rem)'
  }
}
export const ThemeContext = createContext(themes)

const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}

export default ThemeProvider
