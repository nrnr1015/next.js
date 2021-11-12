import React, { useRef, useState } from "react";
import Typewriter from "typewriter-effect";


export default function Typrtwriter() {

  return (
    <>
        
        
        <div className="sub-heading">
			<h1>
				<Typewriter
				options={{
					strings: ["안녕하세요", "이나련입니다."],
					autoStart: true,
					loop: true,
					delay: 100,
					cursor: ".",
					start: 3000,
				}}
				/>
			</h1>
		</div>
    </>
    
  )
}

