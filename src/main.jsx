import React from 'react'
import ReactDOM from 'react-dom/client'

import ThemeStyled from '@/context/ThemeProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeStyled>
      <App />
    </ThemeStyled>
  </React.StrictMode>
)
