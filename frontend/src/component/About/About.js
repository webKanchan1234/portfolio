import React, { useEffect } from 'react'
import "./about.css"
import { useDispatch, useSelector } from 'react-redux'
import { allUsers } from '../../actions/userAction'

const About = () => {
    const dispatch = useDispatch()
  const {users,loading,error} = useSelector(state=>state.users)
  
  const user=users[0]
//   console.log(users)
  useEffect(() => {
    dispatch(allUsers())
  }, [])
    return (
        <div id='about1'>
            <h2 id='center'>About Me</h2>
            <div className='about-container'>
                <div className="about-left">
                    <div className="image">
                        <img src={user?.image} />
                    </div>
                </div>
                <div className="about-right">
                    <h3>{user?.profile}</h3>
                    <p>{user?.description}</p>
                </div>

            </div>
        </div>
    )
}

export default About