import react  from "react";
import bootstrap from "bootstrap";
import { Button, ButtonGroup, Container} from "react-bootstrap";
import additional from '../custom/additional.css';
export default function MainPage () {
    return (
        <div>
            <Container className='main-page-container'>
            <ButtonGroup>
             <Button className="main-page-button" href="/gallery"><i className="bi bi-chevron-double-left"/> Gallery</Button>
             <Button className="main-page-button" href="/About"><i className="bi bi-chevron-double-right"/> About</Button>
             </ButtonGroup>
             </Container>
        </div>
    )}