import React, { useRef, useState } from "react";
import Footer from "../component/Footer";
import Typrtwriter from "../component/Typrtwriter";
import Intro from "../component/Intro";

export default function About() {

  return (
    <div className="container">
      <div className="header-container">
        <div className="header-wrapper">
          
          <Typrtwriter />
          <Intro />

          
        </div>
      </div>
      <div className="contents">
        <section className="work">
          <article className="skill">
            <div className="skill__inner">
              <h3 className="skill__title">
                단단히 쌓아올린 <br/> 기본기를 <br/> 소개합니다.
              </h3>
              <ul className="skill-list">
                <li className="skill-list__item">
                  <strong className="skill-list__name">UI Development</strong>
                  <p className="skill-list__desc">웹 퍼블리싱<small className="small">HTML, CSS, JS</small>을 빠삭하게 이해하며 잘 다룹니다.<br />유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한 업무 프로세스를 지향합니다.</p>
                </li>
                <li className="skill-list__item">
                  <strong className="skill-list__name">Markup</strong>
                  <p className="skill-list__desc">웹 표준을 바탕으로 꼼꼼한 시멘틱 마크업을 작성합니다.</p>
                </li>
                <li className="skill-list__item">
                  <strong className="skill-list__name">Co-work</strong>
                  <p className="skill-list__desc">디자이너, 개발자와 가깝게 일하며, 항상 원활한 협업을 끌어내려고 노력합니다.<br />의도를 이해하고 존중하며 '함께' 좋은 결과물을 만듭니다.</p>
                </li>
                <li className="skill-list__item">
                  <strong className="skill-list__name">Skills</strong>
                  <p className="skill-list__desc">코드를 잘 그려내기 위해 계속 공부 중!<br />Git, Zeplin 등 생산성과 협업을 위한 지식을 배우고 적용하며 공유합니다.</p>
                </li>
                <li className="skill-list__item">
                  <strong className="skill-list__name">For Users</strong>
                  <p className="skill-list__desc">다양한 직군과 함께 사용자 입장에서 생각하고 고민하는 걸 좋아해요.<br/>반응형, 인터랙션 등 사용자에게 편하고 즐거운 UX를 만드는 데 관심이 많습니다.</p>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <Footer />
      </div>
    </div>
  )
}
