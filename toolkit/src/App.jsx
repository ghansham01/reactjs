import { useState } from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scenes/Global/Topbar'
import Sidebar from './scenes/Global/sidbar'
// import Dashbord from './scenes/dashbord'


function App() {
  const [theme, colorMode] = useMode()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className='app'>
            <Sidebar isSidebarOpen={isSidebarOpen}/>
            <main>
              <Topbar/>
              <Routes>
                {/* <Route path='' element={<Dashbord/>}/> */}
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
