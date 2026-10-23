import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UseRefEx from './components/UseRefEx'
import InputFocus from './components/InputFocus'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <section className="app">
        {/* <UseRefEx /> */}
        {/* <InputFocus /> */}
        <Counter />
      </section>
    </>
  )
}

export default App
