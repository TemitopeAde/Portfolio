import React from 'react';
import {Box} from '@mui/material';
import Header from './Header';

const Home = ({theme,setTheme}) => {
  return (
    <Box>
        <Header theme={theme} setTheme={setTheme} />
    </Box>
  )
}

export default Home