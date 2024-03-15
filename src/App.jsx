import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestTemplate2 from './components/template-2'
import TestTemplate3 from './components/template-3'
import TestTemplate5 from './components/template-5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TestTemplate5 />
    </>
  )
}

export default App
