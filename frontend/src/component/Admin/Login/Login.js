import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from '../../../actions/userAction';

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, isAuthenticated, user } = useSelector((state) => state.user)



  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      email,
      password
    }
    // console.log(data)
    
    dispatch(loginUser(formData))
    localStorage.setItem("isAuthenticated", true)
    localStorage.setItem("role", user?.role)
    // navigate("/admin/dashboard")
    if(localStorage.getItem("isAuthenticated")){
      if(localStorage.getItem("role") === "admin"){
        navigate("/admin/dashboard")
      }
    }
  }
  


  return (
    <div className="login-controller">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;