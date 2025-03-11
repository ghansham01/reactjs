import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './compnents/home/Home.jsx'
import About from './compnents/about/About.jsx'
import Contact from './compnents/contect/Contect.jsx'

// import Github from './components/github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
      {/* <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />}
      /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
