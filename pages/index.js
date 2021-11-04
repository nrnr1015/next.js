import React from 'react';
import Head from 'next/head'
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
