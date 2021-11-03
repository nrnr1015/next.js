import React, { useRef, useState } from "react";

import Head from 'next/head'
// import Swipers from './Swipers.js'
import Header from './Header.js'


export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>nrnr</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="/components/style.css" /> */}

      </Head>

   
       
        <Header></Header>
        {/* <Swipers></Swipers> */}
      

     
    </div>
  )
}
