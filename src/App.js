import React, { useState } from "react";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/global";
import { lightTheme, darkTheme } from "./themes/theme";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={themeToggler}>Switch Theme</button>
      <Home />
    </ThemeProvider>
  );
}

export default App;
