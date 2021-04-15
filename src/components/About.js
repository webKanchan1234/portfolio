import React from 'react'
//import { Link } from 'react-router';
import web from "../components/image/kan.png";
//import doc from "../components/image/f.pdf";
//import DownloadLink from "react-download-link";
//import DownloadButton from "downloadbutton";
//import axios from "axios";
const About = () => {
    
    return (
        <>
        
       
        <div className="container1 my-5"id="about">
            <div className="boximg">
                <img className="img" src={web}/>
            </div>
            <div className="content mt-4">
                <h1 className="mar ">About me</h1>
                <p className=""> <b><i>Hey! I'm kanchan kumar</i></b>. Currenty i am  pursuing B.Tech from Bhagalpur College of Enginnering with Computer Science Branch. Currently, I have learning experience of frontend development and backend development. I am specialist for frontend development with react js. </p>
                <a href="" type="submit" class="btn" >My Resume</a>
                <a href="https://github.com/webKanchan1234" type="submit" class="btn">GitHub</a>
                <a href="https://www.linkedin.com/in/kanchan-kumar-bb9346197/" type="submit" class="btn">LinkedIn</a>
                
                
            </div>
            
        </div>
        </>
    )
}

export default About
