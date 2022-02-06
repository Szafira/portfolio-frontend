import { Container, Row } from "react-bootstrap"
import { CarouselRef } from "react-gallery-carousel"
import Comments from "./Comments"
export default function Gallery () {
    return (
        <Container>
            <Row className='gallery-row'>
        <div>
            Test Gallery!
        </div>
            </Row>
            <Row>
            <Comments/>
        
        </Row>
        </Container>
    )}