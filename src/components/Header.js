import React from 'react'
import web from "../components/image/kan.png";
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header_wraper">
            <div className="main_info">
                <h4>Hello,my name is</h4>
                <h1>Kanchan kumar</h1>
                <h3>And I'm a 
                <Typed
                    className="Type-text"
                    strings={[" Web design", " Web development"," Android development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                /></h3><br/> <br/>
                <a href="#contact" className="btn-main-offer">Contact</a>
            </div>
            <div className="img">
                <img src={web} alt=""/>
            </div>

        </div>
    )
}

export default Header
