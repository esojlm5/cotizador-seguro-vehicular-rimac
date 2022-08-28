import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeContext, themes } from '@/context/ThemeProvider'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext.Provider value={themes}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
)
