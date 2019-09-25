import React, { useState } from 'react';
import Signup from './signup.jsx';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
  
const Topbar = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navSelect = (target) => {
        props.selectPage(target);
    }

    const handleLogout = () => {
        props.logOutUser();
    }

    let accountStatus;

    if (props.auth) {
        accountStatus = <Nav.Link onClick={handleLogout}>Sign Out</Nav.Link>;
    } else {
        accountStatus = <Nav.Link onClick={handleShow}>Sign Up</Nav.Link>;
    }

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand id="f" onClick={() => navSelect('welcome')}>F</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
            <Nav.Link onClick={() => navSelect('about')}>About</Nav.Link>
            {accountStatus}
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Sign Up for an Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Signup createUser={props.createUser}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
  }

  export default Topbar;