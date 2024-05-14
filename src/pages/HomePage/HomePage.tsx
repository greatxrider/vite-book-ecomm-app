import { Container, Row, Col } from 'reactstrap';
import Heading from '../../features/heading/Heading';
import './HomePage.module.css';

const HomePage = () => {
    return (
        <Container className='mainHero'>
            <Heading />
        </Container>
    )
}

export default HomePage;
