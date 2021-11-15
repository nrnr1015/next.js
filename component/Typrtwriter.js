import React, { useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";


export default function Typrtwriter() {

  return (
    <>
		<Fade bottom>
			<h1 className="header-title">
				<Typewriter
				options={{
					strings: ["안녕하세요", "이나련입니다"],
					autoStart: true,
					loop: true,
					delay: 100,
					cursor: ".",
					start: 3000,
				}}
				/>
				<span>UI  Markup Developer.</span>
			</h1>
		</Fade>
    </>
  )
}

