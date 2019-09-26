import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Summary = (props) => {

    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });

    return (
        <Container id="summary">
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                </Col>
                <Col md="auto">
                    <h1>FINANCR Report for {props.month}</h1>
                    <h5 id="credit-debit">Credits: {formatter.format(props.credits)} | Debits: {formatter.format(props.debits)}</h5>
                </Col>
                <Col xs lg="2">
                </Col>
            </Row>
        </Container>
    )
}

export default Summary;