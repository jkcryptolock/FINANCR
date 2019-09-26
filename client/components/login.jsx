import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = (props) => {

    const handleLogin = (email, password) => {
        event.preventDefault();
        props.loginUser(email, password);
    }

    return(
        <Form id="login" onSubmit={() => handleLogin(document.getElementById('formLoginEmail').value, document.getElementById('formLoginPassword').value)}>
            <h4>Login</h4>
            <Form.Group controlId="formLoginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formLoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="success" type="submit" onClick={() => handleLogin(document.getElementById('formLoginEmail').value, document.getElementById('formLoginPassword').value)}>
                Submit
            </Button>
            <div>Demo Mode</div>
        </Form>
        
    )
}

export default Login;