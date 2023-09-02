import { useState } from 'react'
import './App.css'

// config router

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

//components
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <>
      <h1>React router</h1>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
         {/* {rota dinamica} */}
        <Route path='/products/:id' element={<Product/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
