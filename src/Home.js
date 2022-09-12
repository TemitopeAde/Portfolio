import React from 'react';
import {Box} from '@mui/material';
import Header from './Header';
import Banner from './Banner';
import ContactMe from './ContactMe';

const Home = ({theme,setTheme}) => {
  return (
    <Box>
        
        <Header theme={theme} setTheme={setTheme} />
        <Banner />

        <ContactMe />
    </Box>
  )
}

export default Home