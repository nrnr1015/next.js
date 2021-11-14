import React, { useRef, useState } from "react";
import Link from 'next/link'
import Fade from "react-reveal/Fade";
import Parallax, { Layer, AppearLayer } from "react-parallax-scroll";
import Typewriter from "typewriter-effect";
import Typrtwriter from "../component/Typrtwriter";
import Swipers from "../component/Swipers";
import BigTextLittleText from "../component/BigTextLittleText";


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
			
			<div className="footer">
				<div className="footer-content">
					<Parallax className="w-full">

						<Layer settings={{ speed: -1.5, type: ["translateX"] }}>
							<h2 className="pr__title"> 함께 일할 멋진 퍼블리셔를 찾고 계신가요?</h2>
						</Layer>
					</Parallax>
				</div>

				<div className="feature">
					<strong class="feature__title">이럴 때 제가 딱<br />어울릴 것 같아요</strong>
					<ul class="feature__list"><li class="feature__list-item">역량과 경험을 갖춘 웹 퍼블리셔가 필요할 때</li><li class="feature__list-item">책임감 있고 함께 일할 때 시너지를 주는 팀원이 필요할 때</li><li class="feature__list-item">성장하지만 겸손을 잃지 않는 사람이 필요할 때</li><li class="feature__list-item"><strong class="accent">좋아하는 일을 잘하는 사람이 필요할 때</strong></li></ul>
				</div>
			</div>
			<div className="footer_mail">
				<h2 class="contact__title">함께 나누고 싶은 얘기가 있으시다면</h2>
				<div class="contact__info">
					<a target="_blank" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=nykim@nykim.net" class="contact__mail">llr2916@naver.com</a>
					<p class="contact__text">어떤 내용이여도 좋아요!&nbsp;<br class="br-mobile" />메일을 보내주시면 평일 기준 3일 내로 답장을 드릴게요.</p>
				</div>	
			</div>

			<div className="sns_footer_wrap">
				<div class="sns_footer">
					<div class="sns">
						<a href="/" target="__blank" class="sns__link sns__link--github">
							<span class="blind">Githud</span> 
						</a>
						<a href="/" target="__blank" class="sns__link sns__link--blog">
							<span class="blind">Blog</span>
						</a>
					</div>
					<div class="footer__copyright">© 2021 NRNR</div>
					<div class="footer__madeby">Made by NRNR 
						<i class="icon icon--heart">&#128400;</i>
					</div>
				</div>
			</div>
			
			
			{/* <Future></Future>
			<Swipers></Swipers> */}
        </div>
    </>
    
  )
}

