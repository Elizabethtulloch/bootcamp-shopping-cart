/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Head from '../components/head';
import NutritionAnalysis from '../components/analysisComponent';
import Header from '../components/header';





export const analysisPage = (props) => (
    <container>

        <Head title = "analysis"/>
        <div>

    <NutritionAnalysis/>
    </div>
    </container>
);






export default analysisPage
