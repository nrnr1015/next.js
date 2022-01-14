import Parallax, { Layer } from "react-parallax-scroll";

const Footer = () => (
	<>
		<div className="footer">
			<div className="footer-content">
				<Parallax className="w-full">

					<Layer settings={{ speed: -1.5, type: ["translateX"] }}>
						<h2 className="pr__title"> 함께 일할 멋진 퍼블리셔를 찾고 계신가요?</h2>
					</Layer>
				</Parallax>
			</div>

			<div className="feature">
				<strong className="feature__title">이럴 때 제가 딱<br />어울릴 것 같아요</strong>
				<ul className="feature__list"><li className="feature__list-item">역량과 경험을 갖춘 웹 퍼블리셔가 필요할 때</li><li className="feature__list-item">책임감 있고 함께 일할 때 시너지를 주는 팀원이 필요할 때</li><li className="feature__list-item">성장하지만 겸손을 잃지 않는 사람이 필요할 때</li><li className="feature__list-item"><strong className="accent">좋아하는 일을 잘하는 사람이 필요할 때</strong></li></ul>
			</div>
		</div>
		<div className="footer_mail">
			<h2 className="contact__title">함께 나누고 싶은 얘기가 있으시다면</h2>
			<div className="contact__info">
				<a target="_blank" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=nykim@nykim.net" className="contact__mail">llr2916@naver.com</a>
				<p className="contact__text">어떤 내용이여도 좋아요!&nbsp;<br className="br-mobile" />메일을 보내주시면 평일 기준 3일 내로 답장을 드릴게요.</p>
			</div>	
			<div className="sns_footer_wrap">
				<div className="sns_footer">
					<div className="sns">
						<a href="https://github.com/nrnr1015" target="__blank" className="sns__link sns__link--github">
							<span className="blind">Githud</span> 
						</a>
						<a href="https://www.notion.so/6b1062a4ecaf41b494962ae558e94331" target="__blank" className="sns__link sns__link--blog">
							<span className="blind">Blog</span>
						</a>
					</div>
					<div className="footer__copyright">© 2022 NRNR</div>
					<div className="footer__madeby">Made by NRNR 
						<i className="icon icon--heart">&#128400;</i>
					</div>
				</div>
			</div>
		</div>

		
	</>
) 
export default Footer