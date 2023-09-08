import { useState } from 'react'
import './App.css'

// config router

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

import NotFound from './pages/NotFound';
import Info from './pages/info';
//components
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import SearchPage from './pages/SearchPage';

function App() {
  
  return (
    <>
      <h1>React router</h1>
      <BrowserRouter>
      <Navbar></Navbar>
      {/* busca */}
      <Search></Search>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
         {/* nested route */}
         <Route path='/products/:id/info' element={<Info/>} />
          {/* {rota dinamica} */}
        <Route path='/products/:id' element={<Product/>} />
        

      <Route path="/search" element={<SearchPage></SearchPage>} />

      <Route path="/company" element={<Navigate to="/about" />} />
        {/* no match */}
        <Route path='*' element={<NotFound/>}/>


        
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
