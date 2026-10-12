
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './layouts/Main'
import Header from './layouts/Header'
import ProductList from './products/ProductList'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/products' element={<ProductList />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
