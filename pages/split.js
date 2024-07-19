/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Head from '../components/head';
import Split from '../components/splitform';
import Header from '../components/header';
import { Link, Button } from '@mui/material';






export const SplitPage = (props) => (
    <container>
        
        <Head title = "split"/>
    <div className='content'>
    <h1 style={{color: "#6e3c19"}}><center>Log your weekly split to stay on track </center>  </h1>
    <Link href="/" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: 10, left: 0,backgroundColor: '#FB6F92'}}>
                                Home  </Button>
    </Link>
    </div>
    <Split/>
  
    </container>
);






export default SplitPage
