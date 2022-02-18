import React, { useRef, useState } from "react";
import Link from 'next/link'
import Fade from "react-reveal/Fade";
import Typrtwriter from "../component/Typrtwriter";
import Intro from "../component/Intro";
import workData from "../data/workData";

export default function Work() {
	const [workDataList, setWorkDataList] = useState(workData);
  return (
	<div className="content-container">
		<div className="header-wrapper">
			<Typrtwriter />
			<Intro />
		</div>
		
		<div className="work-container">
			<div className="grid-wrapper">
				<Fade bottom>	
				{ 
					workDataList.map(function( workDataList, i ){ 
						return ( 
							<div className="work_list" key={workDataList.id}>
								<Link href={workDataList.link}>
									<a target="_blank" className="project-item item1">
										<div className="image-wrapper">
											<img src={workDataList.img} />
											<div className="project-content">
												<span>{workDataList.year}</span>
												<h2>{workDataList.title} </h2>
												<span>{workDataList.skill} </span>
											</div>
										</div>
									</a>
								</Link>
							</div>
						) 
					}) 
				}
				</Fade>	
			</div>
		</div>
	</div>
    
  )
}
