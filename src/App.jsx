import React, {useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import banner from './assets/image/bannerTop.jpg'
import Vitrine from './blocos/vitrine'
import Header from './blocos/header'
import Footer from './blocos/footer'
import Ofertas from '../src/pages/ofertas'
import Categoria from  '../src/pages/category'


function App() {

  // Aqui está retornando só o visual da loja
  // realizei toda a chamada da API e construção dos produtos no arquivo ofertas
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <img src={banner} alt="Banner topo" className="!w-full !h-full !object-cover"/>
            </div>
            <Vitrine/>
          </>
          } 
        />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/category/:nome" element={<Categoria />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
