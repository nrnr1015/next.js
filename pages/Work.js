import React, { useRef, useState } from "react";
import Link from 'next/link'
import Fade from "react-reveal/Fade";

import Typewriter from "typewriter-effect";
import Future from "../component/Future";
import Typrtwriter from "../component/Typrtwriter";
import Swipers from "../component/Swipers";


export default function Work() {

  return (
    <>
        <div className="header-container">
			<div className="header-wrapper">
				{/* <Typrtwriter></Typrtwriter> */}
				<Fade bottom>
					<h1 className="header-title">
						<span>dd.</span>
						<span>ddd.</span>
					</h1>
				</Fade>	
				
				<div className="header-info-wrapper">
					<div class="navigation-wrapper">
					<div class="navigation-email"><a href="mailto:llr2916@naver.com">llr2916@naver.com</a></div>
						<div class="navigation-content">
							<h1>/Web</h1>
						</div>
					</div>
					<div className="content-wrapper">
						<span>반갑습니다!</span>
						<span>저는 견고한 UI와</span>
						<span>기억에 남는 UX를 만드는</span>
						<span>웹 퍼플리셔에요.</span>
					</div>
				</div>
				
				<div className="work-container">
					<div className="grid-wrapper">

						<Fade bottom>
							<Link href="/">
								<a class="project-item">
									<div className="image-wrapper">
										<img src="https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
										<h1>View Project</h1>
									</div>
									<div class="project-content">
										<div class="shift-line">
											<h1>Loud Army</h1>
										</div>
										<h2>Design &amp; Development</h2>
									</div>
								</a>
							</Link>
							<Link href="/">
							<a class="project-item">
									<div className="image-wrapper">
										<img src="https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
										<h1>View Project</h1>
									</div>
									<div class="project-content">
										<div class="shift-line">
											<h1>Loud Army</h1>
										</div>
										<h2>Design &amp; Development</h2>
									</div>
								</a>
							</Link>
							<Link href="/">
							<a class="project-item">
									<div className="image-wrapper">
										<img src="https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
										<h1>View Project</h1>
									</div>
									<div class="project-content">
										<div class="shift-line">
											<h1>Loud Army</h1>
										</div>
										<h2>Design &amp; Development</h2>
									</div>
								</a>
							</Link>
						</Fade>	
					</div>
				</div>
				
			</div>
          
			
			{/* <Future></Future>
			<Swipers></Swipers> */}
        </div>
    </>
    
  )
}

