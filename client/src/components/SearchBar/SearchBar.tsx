import {
    Container, Row, Col, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Form, InputGroup, Input
} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const SearchBar = () => {
    return (
        <Container>
            <Row>
                <Col xs={4}>
                    <UncontrolledDropdown inNavbar>
                        <DropdownToggle nav caret>
                            Menus
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
                <Col xs={8}>
                    <Form className="d-flex" role="search">
                        <InputGroup>
                            <Input className="form-control me-2" type="search" placeholder="Search" aria-label="Search books here" />
                            <Button className="btn-outline-success" type="submit">
                                <FaSearch style={{ color: "#FFD43B" }} />
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar;
