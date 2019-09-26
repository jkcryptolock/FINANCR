import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Inputs = (props) => {

    const dropdownItems = props.categories.map(cat => 
        <Dropdown.Item onClick={() => dropdownSelector(cat)}>{cat}</Dropdown.Item>
    );

    const handleSubmit = () => {
        const catValue = document.getElementById('categorySelection').value;
        const expenseValue = document.getElementById('expenseValue').value;

        props.addExpense(catValue, expenseValue);
        
        document.getElementById('categorySelection').value = '';
        document.getElementById('expenseValue').value = '';

    }

    const dropdownSelector = (selected) => {
        document.getElementById('categorySelection').value = selected;
    }

    return (
        <Container id="inputs">
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                </Col>
                <Col md="auto">
                <InputGroup className="mb-3">
                    <DropdownButton
                    as={InputGroup.Prepend}
                    variant="light"
                    title="Category"
                    id="input-group-dropdown-1"
                    >
                    {dropdownItems}
                    </DropdownButton>
                    <FormControl id="categorySelection" aria-describedby="basic-addon1" />
                </InputGroup>
                </Col>
                <Col md="auto">
                <InputGroup className="mb-3" id="amount">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Amount (+/-)</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    id="expenseValue"
                    placeholder="Amount"
                    aria-label="Amount"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                </Col>
                <Col xs lg="2">
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                </Col>
                <Col md="auto">
                <Button id="addBtn" variant="success" onClick={handleSubmit}>Add Credit or Debit</Button>
                </Col>
                <Col xs lg="4">
                </Col>
            </Row>
        </Container>
    );
}

export default Inputs;