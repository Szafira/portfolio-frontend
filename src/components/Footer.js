import { Container, Nav } from 'react-bootstrap'
import additional from '../custom/additional.css'
export default function Footer () {
    return (
        <Container>
            <Nav className='footer'>
                <Nav.Link className='right-item' href="/loginPage"> Panel administracji</Nav.Link>
            </Nav>
        </Container>
    )}