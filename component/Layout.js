import Link from "next/link";
import Head from 'next/head'

import React from 'react'
import { useState, memo, useEffect } from "react";
import styles from "./Layout.module.css";
import Nav from "./Navigation.js"
import { Timeline , Tween } from "react-gsap";

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <>
      <Head>
        <title>nrnr</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Type"		content="text/html; charset=UTF-8" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Cache-Control"	content="no-cache" />
        <meta http-equiv="X-UA-Compatible"	content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
      </Head>


      <header>
          <Timeline
            target={
              <>
              <Link href="/">
                <a>
                  <div className="logo">NRNR</div>
                </a>
                </Link>  
              </>
            }
          >
            <Tween
              target={0}
              from={{ x: "-200px", opacity: 0 }}
              to={{ x: "0px", opacity: 1 }}
              delay={0.5}
              duration={1.3}
              position="start"
            />
          </Timeline>
      </header>
      <Nav/>
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
    </>
    
    
  );
}
