import TestimonialsCarousel from "../../components/TestimonialsCarousel/TestimonialsCarousel";
import { testimonialsList } from "./testimonialsList";
import { Row, Col } from 'reactstrap';

const Testimonials = () => {
    return (
        <>
            <Row>
                <Col>
                    <h1>Testimonials</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </Col>
                <Col>
                    <TestimonialsCarousel testimonials={testimonialsList.testimonials} />
                </Col>
            </Row>
        </>
    );
};

export default Testimonials;
