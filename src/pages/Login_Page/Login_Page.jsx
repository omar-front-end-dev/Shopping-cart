import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../RTK/Slices/authSlice";


export const Login_Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() =>{
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
    
  const handleLogin = () =>{
    const findUser = users.find(user => user.email === formData.email && user.password === formData.password)
    if (findUser) {
      dispatch(login(findUser.id))
      navigate("/")
    }else{
      console.log("Wrong username or password");
    }
  }

  

  const changeHandler = (e) =>{
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    delete formData.confirmPassword
    handleLogin()
    setFormData({
      email: "",
      password: "",
    })
  }

  return (
    <div className="login-page py-5">
      <Container>
        <Row>
            <Col lg={8} className="mx-auto">
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={formData.email} onChange={changeHandler} type="email" placeholder="Enter email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={formData.password} onChange={changeHandler} type="password" placeholder="Password" name="password" required/>
                    <Form.Text className="text-muted">
                        {`don't have an account? `}
                        <Link to={"/register"} >
                            Create new account
                        </Link>
                    </Form.Text>
                </Form.Group>
                <div className="text-end">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}