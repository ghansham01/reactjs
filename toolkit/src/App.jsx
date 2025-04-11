import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scene/global/topbar";
import MultipleSidBar from "./scene/global/Sidbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


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
           
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
