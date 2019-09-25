import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = (props) => {

    const handleSignup = (username, password) => {
        props.createUser(username, password);
    }

    return(
        <Form id="signup">
            <h4></h4>
            <Form.Group controlId="formSignupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formSignupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="success" type="submit" onClick={() => handleSignup(document.getElementById('formSignupEmail').value, document.getElementById('formSignupPassword').value)}>
                Submit
            </Button>
        </Form>
    )
}

export default Signup;