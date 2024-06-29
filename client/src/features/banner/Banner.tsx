import { useGetItemsQuery } from './bannerApiSlice';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import { Row, Col } from 'reactstrap';
import './Banner.module.css';

const Banner = () => {
    const { data, isError, isLoading, isSuccess } = useGetItemsQuery('recommended');

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
                    <h1>Recommended For You</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                </Col>
                <Col>
                    <BannerCarousel items={data?.items} />
                </Col>
            </Row>
        );
    }

    return null;
};

export default Banner;
