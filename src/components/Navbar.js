import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/react-fontawesome";
export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
<div className="container">
  <a className="navbar-brand" href="#">Portfo<span className="lio">lio</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon navToggle"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item act active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">about</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#services">services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skill">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Project</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">contact</a>
      </li>
      
      
    </ul>
    
  </div>
  </div>
</nav>
    )
}
export default Navbar;