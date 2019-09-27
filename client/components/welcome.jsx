import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './login.jsx';

const Welcome = (props) => {
    return(
        <>
        <Container id="welcome">
            <Row>
                <Col id="welcome-col" md={9}>
                    <div id="title">FINANCR</div>
                    <div id="subtitle">Track and manage your monthly finances for free!</div>
                </Col>
                <Col md={3}>
                    <Login loginUser={props.loginUser} />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Welcome;