import React from 'react';
import Head from 'next/head'
// import Main from './Main.js'
import Work from './Work.js'
// import Swipers from './Swipers.js'

// import Visual from "./Visual.js"

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>nrnr</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Type"		content="text/html; charset=UTF-8" />
<meta http-equiv="Pragma"			content="no-cache" />
<meta http-equiv="Cache-Control"	content="no-cache" />
<meta http-equiv="X-UA-Compatible"	content="IE=edge" />
        <meta name="viewport"				content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />

      </Head>
      <Work></Work>
    </div>
  )
}

