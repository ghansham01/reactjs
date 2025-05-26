import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './sidbar/Sidbar'
import Home from './Pages/Home'
import { AnimatePresence } from "framer-motion";
import Project from './Pages/Project'
import About from './Pages/About'

function App() {

  return (
    <>
      <Sidebar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/project' element={<Project/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </AnimatePresence>
      </main>
    </>
  )
}

export default App
