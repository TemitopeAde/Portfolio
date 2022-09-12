import React from 'react';
import {Box} from '@mui/material';
import Header from './Header';
import Banner from './Banner';

const Home = ({theme,setTheme}) => {
  return (
    <Box>
        
        <Header theme={theme} setTheme={setTheme} />
        <Banner />
    </Box>
  )
}

export default Home