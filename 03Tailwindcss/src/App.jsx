import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <div className='display-flax justify-center items-center h-screen'>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind CSS and Chai </h1>
      <Card />
      <Card channel="chai or code" />
      </div>
    </>
  )
}

export default App
