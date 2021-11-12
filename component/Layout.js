import Link from "next/link";
import React, { Children } from 'react'
import { useState, memo, useEffect } from "react";
import styles from "./Layout.module.css";
import Nav from "./Navigation.js"
import { Timeline, Controls, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

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
    
    <div>

        <header>
          <Timeline
            target={
              <>
                <div className="logo">Phone Company</div>
                
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
    </div>
  );
}
