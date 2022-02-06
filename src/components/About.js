import additional from '../custom/additional.css';
import portrait from '../art/self-portrait.jpg';
import { Col, Container,Image, Row } from 'react-bootstrap';
export default function About () {
    return (
        <Container className='default-container'>
        <Row>
            <Col><Image src={portrait} width="200" height="200" className='rounded-circle border border-dark'/></Col>  
            <Col className='col-9 text-center'><h1>About me</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a justo nec lacus congue ornare ac et lorem. 
            Aenean feugiat augue neque, et laoreet nisi cursus eu. Aenean a iaculis nibh, pulvinar imperdiet nunc. 
            Nulla libero orci, venenatis non arcu id, porttitor ullamcorper mi. 
            Fusce mattis dui risus. Ut eu sem a nibh lacinia laoreet quis et magna. Cras laoreet rutrum turpis eu rutrum. Quisque non sodales neque. </Col>
            
        </Row>
        </Container>
    )}