import { Container } from 'reactstrap';
import './BooksPage.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';

const BooksPage = () => {
    return (
        <Container className='booksPage'>
            <SearchBar />
        </Container>
    )
}

export default BooksPage;
