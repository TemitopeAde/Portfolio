import React, { useState } from "react";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/global";
import { lightTheme, darkTheme } from "./themes/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        </Routes>
        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
