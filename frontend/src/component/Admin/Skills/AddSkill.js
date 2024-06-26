import React, { useState } from 'react'
import "./skills.css"
import Sidebar from '../Sidebar/Sidebar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux"
import { addSkill } from '../../../actions/skillsAction';
// import { useAlert } from 'react-alert'
import AdminHeader from '../AdminHeader/AdminHeader';

const AddSkill = () => {
  // const alert = useAlert()
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [percentage, setPercentage] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name,
      percentage
    }
    // console.log(formData)
    dispatch(addSkill(formData))
    setName("")
    setPercentage("")
    alert.success("Skill added successfully")

  }

  return (
    <>
      <AdminHeader />
      <div className='dashboard-container'>
        <div className="sidebar">
          <div className="overlay-content">
            <Sidebar />
          </div>
        </div>
        <div className="dashboard-right">
          <div className="login-controller">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Skill</Form.Label>
                <Form.Control type="text" value={name} name='text' placeholder="Enter skill" onChange={(e) => setName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Percentage</Form.Label>
                <Form.Control type="text" value={percentage} name='percentage' placeholder="Enter percentage" onChange={(e) => setPercentage(e.target.value)} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddSkill