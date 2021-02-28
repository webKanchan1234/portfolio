import React from 'react'
import web from "../components/image/kan.png";
const About = () => {
    return (
        <div className="container1 my-5"id="about">
            <div className="boximg">
                <img className="img" src={web}/>
            </div>
            <div className="content mt-4">
                <h1 className="px-5">About me</h1>
                <p className=""> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
                <a href="" type="submit" class="btn">My Resume</a>
                <a href="https://github.com/webKanchan1234" type="submit" class="btn">GitHub</a>
                <a href="https://www.linkedin.com/in/kanchan-kumar-bb9346197/" type="submit" class="btn">LinkedIn</a>
                
                
            </div>
            
        </div>
    )
}

export default About
