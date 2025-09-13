import React from 'react'
import{Routes,Route} from 'react-router-dom'
import MainLayout from '../Component/Layout/MainLayout'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Product from '../Pages/Product/Product'

function AppRoute() {
  return (
    <div>
    <Routes>
        <Route element={<MainLayout/>}>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/product" element={<Product/>} />

        </Route>
    </Routes>
    </div>
  )
}

export default AppRoute