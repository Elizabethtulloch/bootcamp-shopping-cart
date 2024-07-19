/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { Button, Link } from '@mui/material';
import SplitPage from './split';
import Header from '../components/header';
import Boxlist from '../components/listfp';


export const aboutMe = (props) => (
  <div className='content'>
    <Link href="/" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: 10, left: 0,backgroundColor: '#FB6F92'}}>
                                Home  </Button>
                </Link>
  


  <h1  style={{color: "#FB6F92"}}><center>Get to know me </center>  </h1>
  <div className = "mepic"><center></center></div>
  <div className = "acontent" ><p> Hi everyone! My name is Elizabeth Tulloch, or Liz, and I am the creator of this project. As someone who has been lifting regularly and has been in the fitness world for a couple of years, I can confidently say that I would use this website in my day to day life. The amount of times that I have walked into the gym just to forget what muscles I hit last time and what I plan to hit today is uncanny. Anyways, enjoy this amazing picture of me! </p></div></div>

      
 


);

export default aboutMe