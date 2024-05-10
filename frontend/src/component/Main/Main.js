import React from 'react'
import CustomNavbar from '../CustomNavbar/CustomNavbar'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import "./home.css"

const Main = () => {
  return (
    <div className='main-container'>
        <CustomNavbar/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default Main