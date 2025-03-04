import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>My App !</h1> 
    </div>
  )
}

// const Reactelement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
// const antherElement = {
//   <a href="https://google.com" target="_blank">Click me to visit google</a>
// }
const antheruser = "react our coffee"

const Reactelement= React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'Click me to visit google',
  antheruser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    {Reactelement}
    <App />
  </StrictMode>,
)
