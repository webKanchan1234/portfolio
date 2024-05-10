import React, { useState } from 'react'
import "./projects.css"
import Sidebar from '../Sidebar/Sidebar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addProject } from '../../../actions/projectAction';

const AddProject = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    url: "",
    image: ""
  })
  const [image, setImage] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.name === "image") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({
          ...formData,
          [e.target.name]: reader.result
        })
      };

      if (file) {
        reader.readAsDataURL(file);
      }

      // setImage(e.target.files[0])
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProject(formData))
    // console.log(formData)
  }

  return (
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
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name='title' placeholder="Enter Title" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name='description' placeholder="Enter Description" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>GitHub</Form.Label>
              <Form.Control type="text" name='github' placeholder="Enter Github Url" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Live URL</Form.Label>
              <Form.Control type="text" name='url' placeholder="Enter Live Url" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default AddProject