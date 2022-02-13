import additional from '../custom/additional.css';
import portrait from '../art/self-portrait.jpg';
import { Col, Container,Image, Row } from 'react-bootstrap';
export default function About () {
    return (
        <Container className='default-container'>
        <Row>
            <Col><Image src={portrait} width="200" height="200" className='rounded-circle border border-dark'/></Col>  
            <Col className='col-9 text-center'><h1>About me</h1>
            <h2>Programistka C# i grafik komputerowy</h2>
            Poza pracą zawodową jako programistka, zajmuje się grafiką komputerową zaczynając od assetów do gier i mniejszych projektów,
                po ilustracje dla polskiego fanpage'a XP-Pena</Col>
        </Row>
        </Container>
    )}