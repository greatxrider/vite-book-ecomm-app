import { Container, Row, Col } from 'reactstrap';
import Heading from '../../features/heading/Heading';
import Partners from '../../features/partners/Partners';
import Banner from '../../features/banner/Banner';
import BooksOnSale from '../../features/booksOnSale/BooksOnSale';
import Testimonials from '../../features/testimonials/Testimonials';
import Blog from '../../features/blog/Blog';
import './HomePage.module.css';
import { useAppSelector } from '../../app/hooks';
import { selectValue } from '../../features/blog/blogSlice';

const HomePage = () => {
    const count = useAppSelector(selectValue);

    return (
        <Container className='mainHero'>
            <Heading />
            <Partners />
            <Banner />
            <BooksOnSale />
            <Testimonials />
            <Blog count={count} />
        </Container>
    )
}

export default HomePage;
