import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UseRefEx from './components/UseRefEx'
import InputFocus from './components/InputFocus'
import Counter from './components/Counter'
import CountReducer from './hooks/CountReducer'
import Bankreducer from './hooks/Bankreducer'
import UserParent from './use_context/UserParent'
import CounterReducer from './apps/CounterReducer'

//내보내기 할때 default가 없는 경우 - 중괄호로 묶는다. 
function App() {

  return (
    <>
      <section className="app">
        {/* <UseRefEx /> */}
        {/* <InputFocus /> */}
        {/* <Counter /> */}
        {/* <CountReducer /> */}
        {/* {<Bankreducer />} */}
        {/*<UserParent />*/}
        {<CounterReducer />}
      </section>
    </>
  )
}

export default App
