import React, { useRef, useState } from "react";
import Link from 'next/link'
import Fade from "react-reveal/Fade";
import Footer from "../component/Footer";
import Intro from "../component/Intro";


export default function Work() {

  return (
    <div className="container">
        <div className="header-container">
			<div className="header-wrapper">
				<Fade bottom>
					<h1 className="header-title">
						<span>dd.</span>
						<span>ddd.</span>
					</h1>
				</Fade>	
				
				<Intro />
			</div>
			
			<div className="work-container">
				<div className="grid-wrapper">

					<Fade bottom>
						<Link href="/">
							<a className="project-item">
								<div className="image-wrapper">
									<img src="https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
									<h1>View Project</h1>
								</div>
								<div className="project-content">
									<div className="shift-line">
										<h1>Loud Army</h1>
									</div>
									<h2>Design &amp; Development</h2>
								</div>
							</a>
						</Link>
						<Link href="/">
						<a className="project-item">
								<div className="image-wrapper">
									<img src="https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
									<h1>View Project</h1>
								</div>
								<div className="project-content">
									<div className="shift-line">
										<h1>Loud Army</h1>
									</div>
									<h2>Design &amp; Development</h2>
								</div>
							</a>
						</Link>
						<Link href="/">
						<a className="project-item">
								<div className="image-wrapper">
									<img src="https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
									<h1>View Project</h1>
								</div>
								<div className="project-content">
									<div className="shift-line">
										<h1>Loud Army</h1>
									</div>
									<h2>Design &amp; Development</h2>
								</div>
							</a>
						</Link>
					</Fade>	
				</div>
			</div>
			<Footer />
        </div>
    </div>
    
  )
}

