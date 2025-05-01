import { useState } from 'react'
import Home from './../src/assets/components/pages/Home'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen">
        <Home />   
      </main>
  )
}

export default App
