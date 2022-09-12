import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

import temitope from "./img/temitope-new.png";
import temitopeNew from "./img/temi.png";

const Banner = () => {
  return (
    <Box mt="3rem" className="banner">
      <Container>
        <Box className="flex-banner">
          <Box className="intro">
            <h1>
              Hi!, I'm Temitope <br />{" "}
              <span
                style={{
                  fontSize: "30px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                A full stack web developer
              </span>
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
            <img src={temitopeNew} alt="temitope" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
