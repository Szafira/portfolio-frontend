import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";


export default function Comments () {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [data, setData] = useState('');
    const handleSubmit = (e) => {
      
  
    e.preventDefault();
     const event = { username, password};
       onClickAction(event)
    }

    function onClickAction() {
        const Users = JSON.stringify({ username: username ,password: password  });
        
        
        console.log(Users);
        var test = axios.post('http://localhost:8080/login',Users,{ headers: {
          'Content-Type': 'application/json'}},).then(Response =>
         {
          console.log(
          Response.data)
          setData(Response.data);
        })
        .catch(error => {console.log(error.Response)})
        
       
          }
         
    
  return (
    <Container className='login-container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" onClick={ (e) =>onClickAction()} > Login </Button>
      </Form>
      </Container>
  );
}
