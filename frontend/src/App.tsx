import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ImageGrid from './components/ImageGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ImageGrid></ImageGrid>
    </div>
  )
}

export default App
