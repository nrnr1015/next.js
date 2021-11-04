import Link from "next/link";
import { useState, memo, useEffect } from "react";
import styles from "./Layout.module.css";
import { pages } from "../data/pages";


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
      <nav className={styles.nav}>
          {pages.map((page, index) => (
            <Link href={page.path} onClick={page.onClick} key={index} >
              {page.title}
            </Link>
          ))}
      </nav>
      
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            console.log("fading out");
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
