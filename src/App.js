import React, { useState } from "react";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/global";
import { lightTheme, darkTheme } from "./themes/theme";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Home theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
