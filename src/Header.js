import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { lightTheme, darkTheme } from "./themes/theme";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <header className="header">
      <Box>
        {/* <button onClick={themeToggler}>Switch Theme</button> */}

        <Box>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    
                      <Box p="6px 20px" className="surname">
                        <Typography variant="h6">A</Typography>
                      </Box>

                      <Typography variant="h6">Temitope</Typography>
                    
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="navlinks">
                  <Grid
                    sx={{ margin: 0 }}
                    container
                    columnSpacing={4}
                    rowSpacing={1}
                  >
                    <Grid item>
                      <li>
                        <a href="#aboutme">About me</a>
                      </li>
                    </Grid>
                    <Grid item>
                      <li>
                        <a href="#portfolio">Portfolio</a>
                      </li>
                    </Grid>
                    <Grid item>
                      <li>
                        <a href="#work">Work</a>
                      </li>
                    </Grid>
                    <Grid item>
                      <li>
                        <a href="#contactme">Contact me</a>
                      </li>
                    </Grid>
                    <Grid item>
                      <li>
                        {theme === "light" ? (
                          <button onClick={themeToggler}>
                            <MdOutlineDarkMode />
                          </button>
                        ) : (
                          <button onClick={themeToggler}>
                            <MdLightMode />
                          </button>
                        )}
                      </li>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
