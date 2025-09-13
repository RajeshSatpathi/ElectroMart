import React from 'react'
import Home from './Pages/Home/Home'
import AppRoute from './routing/AppRoute'
import { BrowserRouter  } from "react-router-dom"

function App() {
  return (
   <BrowserRouter>
   <AppRoute/>
   </BrowserRouter>
  )
}

export default App