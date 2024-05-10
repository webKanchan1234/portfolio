import React, { useEffect, useState } from 'react'
import "./home.css"
import {useDispatch,useSelector} from "react-redux"
import { allUsers, downloadResume } from '../../actions/userAction'
import axios from 'axios'

import { useTypewriter } from 'react-simple-typewriter'


const Home = () => {
  const dispatch = useDispatch()
  const {users,loading,error} = useSelector(state=>state.users)
  const [resume, setResume] = useState("")
  const [text] = useTypewriter({
    words: ['Frontend Developer'],
    loop: 0
  })
  
  const user=users[0]
  // console.log(users)
  useEffect(() => {
    dispatch(allUsers())
  }, [])

  const download = async ()=>{
    dispatch(downloadResume())
  }
  // useEffect(() => {
  //   getResume()
  // }, [])
  
  
  return (
    <div className='home-container' id='home1'>
        <div className="home-left">
            <p>Hi, Myself!</p>
            <h2>I'm <span style={{color:"#e3a93e"}}>{user?.name}</span></h2>
            <h3>And I'm a <span style={{
              color:"rgb(45, 164, 220)"
            }}>{text}</span></h3>
            <p>{user?.description}</p>
            <button id='cv' onClick={download}>Download CV</button>
        </div>
        <div className="home-right">
            <div className="image">
                <img src={user?.image} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Home