import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
    <div className='bg-stone-200 min-h-screen '>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
