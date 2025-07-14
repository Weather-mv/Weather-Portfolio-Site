import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import About from './pages/About'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
    </div>
  )
}

export default App