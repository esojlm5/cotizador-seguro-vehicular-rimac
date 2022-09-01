import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, MakeYourPlan, Thanks } from '@/pages'
import { Layout } from '@/components/'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/arma-tu-plan' element={<MakeYourPlan />} />
          ;<Route path='/gracias' element={<Thanks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
