import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react'
import ThemeBtn from './components/Themebtn'
import Card from './components/card'

function App() {
  const [themeMode,setthemeMode] = useState("light")

  const lightTheme = ()=>{
    setthemeMode("light")
  }

  const darkTheme = ()=>{
    setthemeMode("dark")
  }

  // actual change in theme toggle
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")

    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themebtn */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
