import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './pages/Main'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Board from './pages/Board'
import BoardDetail from './pages/BoardDetail'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/board" element={<Board />} />
              {/* 경로 변수 */}
              <Route path="/board/:id" element={<BoardDetail />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
