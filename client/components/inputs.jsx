import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';

const Inputs = (props) => {

    return(
        <Container id="inputs">
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                </Col>
                <Col md="auto">
                <InputGroup className="mb-3">
                    <DropdownButton
                    as={InputGroup.Prepend}
                    variant="light"
                    title="Description"
                    id="input-group-dropdown-1"
                    >
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Separated link</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-describedby="basic-addon1" />
                </InputGroup>
                </Col>
                <Col md="auto">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Amount (+/-)</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Amount"
                    aria-label="Amount"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                </Col>
                <Col xs lg="2">
                </Col>
            </Row>
        </Container>
    )

}

export default Inputs;