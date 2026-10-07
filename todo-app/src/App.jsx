import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <h2>할 일 관리</h2>
      </div>
    </>
  )
}

export default App
