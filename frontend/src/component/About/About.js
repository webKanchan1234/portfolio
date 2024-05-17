import React, { useEffect } from 'react'
import "./about.css"
import { useDispatch, useSelector } from 'react-redux'
import { allUsers } from '../../actions/userAction'
import { Table } from '@mui/material'

const About = () => {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.users)

    const user = users[0]
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
                    <div >
                        <h3>{user?.profile}</h3>
                        <p>{user?.description}</p>
                    </div>
                    <Table >
                        <tbody>
                            <tr>
                                <td>Profile:</td>
                                <td id='pro'>{user?.profile}</td>
                            </tr>
                            <tr>
                                <td>Frontend Skills:</td>
                                <td id='pro'>HTML, CSS, Javascript, React JS</td>
                            </tr>
                            <tr>
                                <td>Backend Skills:</td>
                                <td id='pro'>Node JS, Spring Boot</td>
                            </tr>
                            <tr>
                                <td>Database:</td>
                                <td id='pro'>Mysql, mongoDB</td>
                            </tr>
                            <tr>
                                <td>Familiar:</td>
                                <td id='pro'>Bootstrap, Material UI, GIT, Jira</td>
                            </tr>
                            <tr>
                                <td>Education:</td>
                                <td id='pro'>{user?.education}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        </div>
    )
}

export default About