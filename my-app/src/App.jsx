import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Layout/Navbar.jsx'
import Footer from './components/Layout/Footer.jsx'


function App() {


  return (
    <BrowserRouter>
     <Navbar />
     <Footer/>
    </BrowserRouter>
  )
}

export default App
