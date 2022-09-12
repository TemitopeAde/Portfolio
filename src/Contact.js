import { Box, Container } from "@mui/material";
import React from "react";
import {Link} from 'react-router-dom';
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import {IoLogoWhatsapp} from 'react-icons/io'



const ContactMe = () => {
  return (
    <Box mt="4rem" mb="5rem" className="contact-me">
      <Container>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: "3rem",
          }}
          className="contact-title title"
        >
          Contact me
        </h1>
        <form>
          <Box className="contact-me-flex">
            <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <Box className="grid-form">
                <input
                  type="text"
                  placeholder="First name"
                  className="form-control"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="form-control"
                />
              </Box>
              <Box>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </Box>

              <Box>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </Box>

              <Box>
                <button className="submit-btn">
                    Send
                </button>
              </Box>
            </Box>

            <Box className="find-me-on">
              <h1 style={{fontWeight: '400', fontFamily: 'Poppins !important'}}>You can reach me through:</h1>
              <a style={{ fontSize: '2rem'}} href="/">
                <IoLogoWhatsapp />
              </a>

              <h1 style={{marginTop: '2rem'}}>Follow me on</h1>
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
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default ContactMe;
