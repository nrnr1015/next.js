import React, { useRef, useState } from "react";
import Fade from "react-reveal/Fade";


export default function Meatbox() {

  return (

    <div className="content-container">
      <div className="header-wrapper">
        <Fade bottom>
          <h1 className="header-title">
            <span>MEATBOX.모바일</span>
            <span>리뉴얼 &amp; 유지보수</span>
          </h1>
        </Fade>	
        
      </div>
      
      <div className="workSpace">
        <div className="workSpace_inner">
          <img src="/works/meatboxMobile.jpg" alt="ff"/>  
        </div>
      </div>    
    </div>
    
  )
}
