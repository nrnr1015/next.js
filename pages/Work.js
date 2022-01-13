import React, { useRef, useState } from "react";
import Link from 'next/link'
import Fade from "react-reveal/Fade";
import Typrtwriter from "../component/Typrtwriter";
import Intro from "../component/Intro";
import Footer from "../component/Footer";


export default function Work() {

  return (
	<div className="content-container">
		<div className="header-wrapper">
			<Typrtwriter />
			<Intro />
		</div>
		
		<div className="work-container">
			<div className="grid-wrapper">

				<Fade bottom>
					<Link href="/Work/Meatbox">
						<a className="project-item item1">
							<div className="image-wrapper">
								<img src="/meatboxThm.jpg" />
								<div className="project-content">
									<span>유지보수&amp;리뉴얼</span>
									<h2>MEATBOX Mobile</h2>
									<span># html5&amp;# css&amp;# jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					<Link href="/Work/sellerApp">
						<a className="project-item item1">
							<div className="image-wrapper">
								<img src="/sellerApp.jpg" />
								<div className="project-content">
									<span>2022</span>
									<h2>미트박스 판매자 Web/App</h2>
									<span># html5&amp;# css&amp;# jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					<Link href="/">
					<a className="project-item item2">
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
					<a className="project-item item3">
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
					<a className="project-item item3">
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
					<a className="project-item item3">
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
    
  )
}

