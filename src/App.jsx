import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, MakeYourPlan } from '@/pages'
import { Layout } from '@/components/'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/arma-tu-plan' element={<MakeYourPlan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
