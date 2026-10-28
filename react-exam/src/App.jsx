import './App.css'
import LikeButton from './components/LikeButton'
import LiveInput from './components/LiveInput'
import Page from './components/Page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import ProductList from "./pages/ProductList";
import Notice from './pages/Notice';

function App() {

  return (
    <>
      <section className='app'>
        {/* <LikeButton /> */}
        {/* <LiveInput /> */}
        {/* <Page /> */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/notice" element={<Notice />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App

