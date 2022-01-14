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
					<Link href="/Work/sellerApp">
						<a className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/sellerApp.jpg" />
								<div className="project-content">
									<span>2022</span>
									<h2>미트박스 판매자 Web/App</h2>
									<span># html5&amp;# css&amp;# jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					<Link href="/Work/Meatbox">
						<a className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/meatboxThm.jpg" />
								<div className="project-content">
									<span>유지보수&amp;리뉴얼</span>
									<h2>MEATBOX MOBILE Web</h2>
									<span># html5&amp;# css&amp;# jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					
					<Link href="/Work/coxiThm">
						<a className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/coxiThm.jpg" />
								<div className="project-content">
									<span>2019</span>
									<h2>COXI MOBILE Web</h2>
									<span># html5&amp;# css&amp;# jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					<Link href="/Work/iblThm">
						<a className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/iblThm.jpg" />
								<div className="project-content">
									<span>2019</span>
									<h2>IBL ADMIN Web</h2>
									<span># html5&amp;# css&amp;# jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
				</Fade>	
			</div>
		</div>
	</div>
    
  )
}

