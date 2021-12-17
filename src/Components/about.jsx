import React from 'react';
import "./component.css";
import git from "./git.jpg";
import linkedin from "./Linkedin-Logo.png"
import ig from "./instagram.png"
import gmail from "./Email.png"
import {Link} from 'react-router-dom';

function About(){
    return(
        <div>
        <div class="topnav" id="myTopnav">
            <Link to = '/'>Home</Link>
        </div>
		<div style={{backgroundColor:"white",padding:"50px",paddingRight:"250px"}}>
           <h1 style={{fontFamily:"serif"}}>From the Developers</h1>
		   <h4 style={{fontFamily:"serif",color:"#e05a00"}}>
		   Exam Scheduling is a laborious and time-consuming job and requires much planning. Exam seating arrangement and  allocating invigilation duties during exam requires much  time and  effort.
		    ​To simplify the process of exam scheduling, we created a web application which can automate the process of exam-scheduling and save a lot of time and effort. 
			Examination Scheduling Management System atomizes the process of assigning seating arrangement. The dates of examination are provided to the system, the system accesses the college database
			 for student and classroom information and creates an exam schedule on the given dates. The system allocates invigilation to faculties on examination day based on their availability.​​
		   </h4>
		</div>
       <section class="color-1" style={{position:"absolute",left:"15%",top:"55%"}}>
				<p>
					<a href="https://github.com/ashwanth-07/noname" target="blank"><button class="btn btn-1 btn-1e"><img src={git} height="60px" width="175px"/></button></a>
			    </p>
			</section>
			
			<section class="color-3" style={{position:"absolute",left:"60%",top:"55%"}}>
				<p>
			    	<a href="https://www.instagram.com/ashwanth__07/" target="blank"><button class="btn btn-3 btn-3e"><img src={ig} height="60px" width="150px"/></button></a>
				</p>
			</section>
            <section class="color-8" style={{position:"absolute",left:"16%",top:"75%"}}>
				<p class="perspective">
                <a href="https://www.linkedin.com/in/dharun-narayanan-l-k-407459197/" target="blank"><button class="btn btn-8 btn-8c"><img src={linkedin} height="60px" width="150px"/></button></a>
				</p>		
			</section>
			<section class="color-6" style={{position:"absolute",left:"60%",top:"75%"}}>
				<p class="perspective">
					<a href="mailto:ash73041@gmail.com"><button class="btn btn-8 btn-8d"><img src={gmail} height="70px" width="150px"/></button></a>
				</p>
			</section>
			
</div>
    )
}
export default About;