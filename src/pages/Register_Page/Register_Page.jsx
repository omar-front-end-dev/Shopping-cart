import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Register_Page = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleAddUser = (data) =>{
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }


  const submitHandler = (e) =>{
    e.preventDefault()
    if (user.fullName != "" && user.email != "" && user.password != "" && user.password === user.confirmPassword) {
      delete user.confirmPassword
      handleAddUser(user)
      setUser({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    }
  }
  return (
    <div className="login-page py-5">
      <Container>
        <Row>
            <Col lg={8} className="mx-auto">
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control required onChange={changeHandler} value={user.fullName} type="text" placeholder="Full Name" name="fullName"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required onChange={changeHandler} value={user.email} type="email" placeholder="Enter email" name="email"/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required onChange={changeHandler} value={user.password} type="password" placeholder="Password" name="password"/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control required onChange={changeHandler} value={user.confirmPassword} type="password" placeholder="Confirm password" name="confirmPassword"/>
                    <Form.Text className="text-muted">
                        {`Already have an account? `}
                        <Link to={"/login"} >
                            Login now
                        </Link>
                    </Form.Text>
                </Form.Group>

                <div className="text-end">
                    <Button variant="success" type="submit">
                      Register
                    </Button>
                </div>
            </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

