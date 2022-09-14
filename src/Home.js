import React from 'react';
import {Box} from '@mui/material';
import Header from './Header';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Services from './Services';

const Home = ({theme,setTheme}) => {
  return (
    <Box>
        
        <Header theme={theme} setTheme={setTheme} />
        <Banner />
        <Services />
        <Projects />
        <ContactMe />
    </Box>
  )
}

export default Home