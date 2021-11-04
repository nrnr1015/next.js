import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition'
import Head from 'next/head'
import Swiper from 'swiper';
import Swipers from './Swipers.js'
export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>nrnr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Swipers />
     
    </div>
  )
}
