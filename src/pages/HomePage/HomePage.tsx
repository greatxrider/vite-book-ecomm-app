import { Container, Row, Col } from 'reactstrap';
import Heading from '../../features/heading/Heading';
import Partners from '../../features/partners/Partners';
import Banner from '../../features/banner/Banner';
import BooksOnSale from '../../features/booksOnSale/BooksOnSale';
import Testimonials from '../../features/testimonials/Testimonials';
import Blog from '../../features/blog/Blog';
import './HomePage.module.css';

const HomePage = () => {
    return (
        <Container className='mainHero'>
            <Heading />
            <Partners />
            <Banner />
            <BooksOnSale />
            <Testimonials />
            <Blog />
        </Container>
    )
}

export default HomePage;
