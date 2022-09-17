import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

import temi from "./img/temi.jpg";
import bitkash from './img/bitkash.png';
import swapped from './img/swapped.png';
import ai from './img/AI.png'

const Projects = () => {
  return (
    <Box>
      <Box>
        <Box className="flex-item">
          <h1>My work</h1>
        </Box>
        <Splide
          options={{
            rewind: true,
            width: "100%",
            gap: "3rem",
            perPage: 2,
            breakpoints: {
              623: {
                perPage: 1,
                perMove: 1,
              },
              935: {
                perPage: 2,
                perMove: 1,
              },
              1024: {
                perPage: 2,
                perMove: 1,
              },
              
              1247: {
                perPage: 2,
                perMove: 1,
              },
            },
          }}
          aria-label="My Previous Project"
        >
          <SplideSlide>
            <Box className="relative-box">
              <div>
                <img src={bitkash} alt="" />
                <div className="overlay">
                  <div className="overlay-flex">
                    <div>
                      <a href="https://comforting-manatee-31f19b.netlify.app ">Demo</a>
                      <a href="/">Source code</a>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box className="relative-box">
              <div>
                <img src={swapped} alt="" />
                <div className="overlay">
                  <div className="overlay-flex">
                    <div>
                      <a href="https://joyful-sprinkles-d51433.netlify.app">Demo</a>
                      <a href="/">Source code</a>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box className="relative-box">
              <div>
                <img src={ai} alt="" />
                <div className="overlay">
                  <div className="overlay-flex">
                    <div>
                      <a href="https://glistening-cobbler-b10e61.netlify.app">Demo</a>
                      <a href="/">Source code</a>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box className="relative-box">
              <div>
                <img src={temi} alt="" />
                <div className="overlay">
                  <div className="overlay-flex">
                    <div>
                      <Link to="/">Demo</Link>
                      <Link to="/">Source code</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </SplideSlide>
        </Splide>
      </Box>
    </Box>
  );
};

export default Projects;
