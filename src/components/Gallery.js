import { Container, Row } from "react-bootstrap";
import additional from '../custom/additional.css';
import { ImageSlider } from "react-simple-gallery"
import "react-simple-gallery/dist/index.css"

const images = [
    {
        src: 'https://pbs.twimg.com/media/FCaakcUWEAAn1pE?format=png&name=small',
    },
    {
        src: 'https://pbs.twimg.com/media/Ec0pJ36XkAITJi5?format=jpg&name=medium',
    },
    {
        src: 'https://pbs.twimg.com/media/EwhynmRWEAU5QnM?format=jpg&name=medium',
    },
    {
        src: 'https://pbs.twimg.com/media/EuXDXisXEAEyanJ?format=jpg&name=medium',
    },
    {
        src: 'https://pbs.twimg.com/media/D-gGXU_XYAA_Q8Q?format=png&name=large',
    },
  ];
  
export default function Gallery () {
    return (
        <Container className='.gallery-row'>
         <div>
        <ImageSlider className='.gallery-row' data={images} />
        </div>
        </Container>
    )}
