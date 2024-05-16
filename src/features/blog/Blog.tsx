import { BlogCard } from '../../components/BlogCard/BlogCard';
import { Row, Col, Button } from 'reactstrap';
import './Blog.module.css';

const Blog = () => {
    return (
        <Row>
            <Col>
                <h1>Latest News</h1>
            </Col>
            <Col>
                <BlogCard />
            </Col>
            <Col>
                <Button>View more</Button>
            </Col>
        </Row>
    )
}

export default Blog;
