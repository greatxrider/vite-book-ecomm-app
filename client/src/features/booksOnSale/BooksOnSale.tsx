import BooksOnSaleCarousel from '../../components/BooksOnSaleCarousel/BooksOnSaleCarousel';
import { useGetItemsQuery } from '../heading/headingApiSlice';
import { Row, Col } from 'reactstrap';
import './BooksOnSale.module.css';

const BooksOnSale = () => {
    const { data, isError, isLoading, isSuccess } = useGetItemsQuery('booksOnSale');

    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (isSuccess) {
        return (
            <Row>
                <Col>
                    <h1>Books on Sale</h1>
                </Col>
                <Col>
                    <BooksOnSaleCarousel items={data?.items} />
                </Col>
            </Row>
        );
    }

    return null;
}

export default BooksOnSale;
