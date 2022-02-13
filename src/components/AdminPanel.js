import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";

export default function AdminPanel () {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');
    const handleSubmit = (e) => {
      
  
    e.preventDefault();
     const event = { username, password};
       onClickAction(event)
    }

    function onClickAction() {
        const Users = JSON.stringify({ username: username ,password: password  });
        
        
        console.log(Users);
       var test = axios.post('http://localhost:8080/account/register',Users,{ headers: {
          'Content-Type': 'application/json'}},).then(Response =>
         {
          setData(Response.data);

        })
        .catch(error => {console.log(error.Response)})
        
          }

    function onClickChange(){
        const Users = JSON.stringify({ username: username });
        
        
        console.log(Users);
       var test = axios.post('http://localhost:8080/account/update',Users,{ headers: {
          'Content-Type': 'application/json'}},).then(Response =>
         {
          setData(Response.data);

        })
        .catch(error => {console.log(error.Response)})
    }

    function onClickDelete(){
      const Users = JSON.stringify({ username: username });
      
      
      console.log(Users);
     var test = axios.post('http://localhost:8080/account/delete',Users,{ headers: {
        'Content-Type': 'application/json'}},).then(Response =>
       {
        setData(Response.data);

      })
      .catch(error => {console.log(error.Response)})
  }
  
    
  return (
    <Container className='login-container'>
    <Row>
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
      <Form.Group size="lg" controlId="email">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <Button type="submit" onClick={ (e) =>onClickAction()} > Add User </Button>  
    </Form>
    </Row>
    <Row>
    <Form onSubmit={handleSubmit}>
    <Form.Label>username</Form.Label>
        <Form.Control
          autoFocus
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label>username</Form.Label>
        <Form.Control
          autoFocus
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    
      <Button type="submit" onClick={ (e) =>onClickDelete()} > Delete User </Button>
    </Form>
    </Row>

    <Row>
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
      <Button type="submit" onClick={ (e) =>onClickChange()} > Update User </Button>  
    </Form>
    </Row>
    </Container>
    
  );
}
