import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';


const Boxlist = () => {
  

  return (
    <Grid container justifyContent="flex-start" style={{left: 0}}>
    <Grid item>
        <Box className = "box" sx={{ maxWidth: '200px' }}>
            {/* Content of the Box */}
            <p> Just some reminders!</p>
            <ul>
  <li><p>Drink water</p> </li>
  <li><p>Dont forget deorterent</p></li>
  <li><p>Take rest days</p> </li>
  <li><p>DONT FORGET TO TAKE REST DAYS</p> </li>

</ul>
        </Box>
    </Grid>
</Grid>

  );
};

export default Boxlist;