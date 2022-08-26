import { Button } from '@components'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Button className='blue' handleClick={() => console.log('clicked')} />
    </div>
  )
}

export default App
