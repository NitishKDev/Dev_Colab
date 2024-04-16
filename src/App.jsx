

import './App.css'
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('red')

  return (
    <>
      <h1 style={{ color: 'Black', fontSize: '3rem', fontWeight: 'bold' }}>Dev Colab</h1>
      <div style={{ 
        background: 'linear-gradient(to bottom right, red, blue)',
        width: '100vw',
        height: '100vh',
      }}></div>
    </>
  )
}


export default App
