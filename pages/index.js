/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { Button, Link } from '@mui/material';
import SplitPage from './split';
import Header from '../components/header';
import Boxlist from '../components/listfp';


export const IndexPage = (props) => (
  <div >
    {/* <Header/> */}
  <section className='hero'>
  <div className = "content">
     <Head title='Home'/>
    <h1 >Welcome to MyFitness !</h1>
    <p> Your hub for staying on track in your fitness journey  <br/> <br/>Lets get started! 
      Select from the menu below to start logging
    </p>
    <Link href="/split" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: 300, left: 550,backgroundColor: '#FB6F92'}}>
                                split </Button>
                </Link>
                <Link href="/analysis" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: 300, left: 750,backgroundColor: '#FB6F92'}}>
                                Analysis </Button>
                </Link>
                <Link href="/gettoknow" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: 300, left: 950,backgroundColor: '#FB6F92'}}>
                                About me!  </Button>
                </Link>

 


  </div>
  </section>
      
 

  </div>
);

export default IndexPage