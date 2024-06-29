import { partnerList } from "./partnersList";
import { Container, Row, Col } from "reactstrap";

const Partners = () => {
    return (
        <Container>
            <Row>
                {partnerList.partners.map((partner) => (
                    <Col key={partner.id} sm='12'>
                        <img src={partner.image} alt={partner.name} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Partners;
