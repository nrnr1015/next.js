import React, { useEffect, useRef, useState } from "react";

export default function ContetnsSkew() {
  const size  = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();
  const skewConfigs = {
    ease: .1, 
    current: 0,
    previous: 0,
    rounded: 0
  }
  useEffect(() => {
    document.body.style.height - `${
      scrollContainer.current.getBoundingClientRect().height
    }px`
  }, [size.height])
  return (
    <div className="ContetnsSkew">
      
      <style jsx global>{`
        .ContetnsSkew {
          position: fixed; 
          top: 0;
          left: 0;
          height: 100%;
          widht: 100%;
          overflow : hidden;
        }
      `}</style>
    </div>
  )
}
