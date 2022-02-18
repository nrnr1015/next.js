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
					<Link href="https://nrnr1015.notion.site/6e46beb922614a41937a038918cc403e">
						<a target="_blank" className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/sellerApp.jpg" />
								<div className="project-content">
									<span>2022</span>
									<h2>미트박스 판매자 Web/App</h2>
									<span>#html5&amp;#scss&amp;#jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					<Link href="https://nrnr1015.notion.site/MOBILE-WEB-dcc8f6a9f1374fb39bf3e8b8d7f21408">
						<a target="_blank" className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/meatboxThm.jpg" />
								<div className="project-content">
									<span>유지보수&amp;리뉴얼</span>
									<h2>MEATBOX MOBILE Web</h2>
									<span>#html5&amp;#css&amp;#jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					
					<Link href="https://nrnr1015.github.io/coxi-html-mo-master">
						<a target="_blank" className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/coxiThm.jpg" />
								<div className="project-content">
									<span>2019</span>
									<h2>COXI MOBILE Web</h2>
									<span>#html5&amp;#css&amp;#jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					<Link href="https://nrnr1015.github.io/iblAdmin/">
						<a target="_blank" className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/iblThm.jpg" />
								<div className="project-content">
									<span>2019</span>
									<h2>IBL ADMIN Web</h2>
									<span>#html5&amp;#css&amp;#jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					<Link href="http://www.unioncement.com/index.php">
						<a target="_blank" className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/union.png" />
								<div className="project-content">
									<span>2016</span>
									<h2>Union Responsive Web</h2>
									<span>#html5&amp;#css&amp;#jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					<Link href="https://www.yg1.kr/kor/main.asp">
						<a target="_blank" className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/yg1.png" />
								<div className="project-content">
									<span>2016</span>
									<h2>YG-1 Responsive Web</h2>
									<span>#html5&amp;#css&amp;#jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					<Link href="http://www.graphenesq.co.kr/">
						<a target="_blank" className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/graphene.png" />
								<div className="project-content">
									<span>2016</span>
									<h2>Graphenesq WEB</h2>
									<span>#html5&amp;#css&amp;#jquery&amp; #javascript</span>
								</div>
							</div>
						</a>
					</Link>
					<Link href="http://2016pams.pams.or.kr/mobile/main.asp">
						<a target="_blank" className="project-item item1">
							<div className="image-wrapper">
								<img src="/thms/pams2016.png" />
								<div className="project-content">
									<span>2016</span>
									<h2>PAMS 2016 MOBILE</h2>
									<span>#html5&amp;#css&amp;#jquery&amp; #javascript</span>
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

