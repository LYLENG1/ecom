import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import Home from './pages/Home'
import ShopingCart from './pages/ShopingCart'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
   <>
   <ToastContainer />
    <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/feature' element={<ShopingCart/>}/>
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />}/>
     </Routes>
     <Footer/>
     </>
  )
}

export default App