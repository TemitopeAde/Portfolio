import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

import temitope from './img/temi.jpg';


const Banner = () => {
  return (
    <Box mt="3rem" className="banner" pl="3rem" pr="3rem">
      <Box className="flex-banner">
        <Box className="intro">
          <h6>Hey!, I'm Temitope</h6>

          <h1>
            I enjoy designing and developing websites and digital products
          </h1>

          <Box className="social-icons">
            <a href="/">
              <BsGithub />
            </a>
            <a href="/">
              <BsFacebook />
            </a>
            <a href="/">
              <AiFillTwitterCircle />
            </a>
            <a href="/">
              <BsLinkedin />
            </a>
          </Box>
        </Box>

        <Box>
          <img src={temitope} alt="temitope" />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
