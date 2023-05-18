import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import { Container, Row, Col, Button, Form } from "react-bootstrap";


function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        if (storedEmail === email && storedPassword === password) {
          setEmail("");
          setPassword("");
          navigate('/projects')
        } else {
          alert("Invalid credentials");
        }
      };

    return (
        <Container>
        <Row className="justify-content-center">
       
          <Col lg={6}>
          <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
     </Form.Group>
     <Button variant="primary" type="submit">
        Submit
      </Button>
     </Form>
     </Col>
     </Row>
     </Container>
       
       
         
    );
}
export default Login;