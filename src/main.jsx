import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import { MakeYourPlan } from '@/pages'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/arma-tu-plan' element={<MakeYourPlan />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
