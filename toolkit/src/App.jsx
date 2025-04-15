import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scene/global/Topbar";
import MultipleSidBar from "./scene/global/Sidbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./scene/dashbord/Index";
import Team from "./scene/team/Index";
import Contects from "./scene/content/ConInfo";
import Invoice from "./scene/invece";
import From from "./scene/from/Index";
import Calender from "./scene/calender";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app flex">
          <MultipleSidBar isSidebar={isSidebar} />
          <main className="content" >
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contects/>}/>
              <Route path="/invoices" element={<Invoice/>}/>
              <Route path="/form" element={<From/>}/>
              <Route path="/calendar" element={<Calender/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
