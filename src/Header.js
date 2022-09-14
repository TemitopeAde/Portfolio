import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { lightTheme, darkTheme } from "./themes/theme";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  if (window.innerWidth <= 900) {
    return (
      <header
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
        className="mobile-header"
      >
        <Box>
          <Box>
            <Container>
              <Stack
                alignItems="center"
                justifyContent="center"
                direction="row"
                spacing={3}
                className="mobile-navlinks"
              >
                <Box>
                  <li>
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      href="#aboutme"
                    >
                      <span style={{ fontSize: "1.3rem" }}>
                        <MdOutlineDarkMode />
                      </span>
                      <span style={{ fontSize: "1rem", marginTop: "-4px" }}>
                        About me
                      </span>
                    </a>
                  </li>
                </Box>
                <Box>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                </Box>
                <Box>
                  <li>
                    <a href="#work">Work</a>
                  </li>
                </Box>
                <Box>
                  <li>
                    <a href="#contactme">Contact me</a>
                  </li>
                </Box>
              </Stack>
            </Container>
          </Box>
        </Box>
      </header>
    );
  }

  if (window.innerWidth > 900) {
    return (
      <header className="header">
        <Box>
          <Box>
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
                      <Typography variant="h6" className="header-big">A</Typography>
                    </Box>

                    <Typography variant="h6" className="header-big">Temitope</Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="navlinks">
                  <Grid
                    sx={{ margin: 0 }}
                    container
                    columnSpacing={2}
                    rowSpacing={1}
                    justifyContent="flex-end"
                    pr="3rem"
                    alignItems="flex-end"
                  >
                    <Grid item>
                      <li>
                        <a className="header-small" href="#aboutme">About me</a>
                      </li>
                    </Grid>
                    <Grid item>
                      <li>
                        <a className="header-small" href="#portfolio">Portfolio</a>
                      </li>
                    </Grid>
                    <Grid item>
                      <li>
                        <a className="header-small" href="#work">Work</a>
                      </li>
                    </Grid>
                    <Grid item>
                      <li>
                        <a className="header-small" href="#contactme">Contact me</a>
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
          </Box>
        </Box>
      </header>
    );
  }
};

export default Header;
