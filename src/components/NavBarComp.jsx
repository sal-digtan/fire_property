import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonCircle } from "react-icons/bs";
import Image from 'react-bootstrap/Image';
import logo from '../assets/images/Logo.png'
import hamburgerIcon from '../assets/images/hamburgericon.svg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom'
import profileIcon from '../assets/images/userprofileIcon.png'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBarComp = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { pathname } = useLocation();

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-auto d-lg-flex d-md-flex d-none">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#short-let">Short-Let</Nav.Link>
                        <Nav.Link href="#listing">Listing</Nav.Link>
                    </Nav>
                    <Nav className="me-auto ms-auto text-center">
                        <Link to={'/'}>
                            <Navbar.Brand href="#home">
                                <Image src={logo} fluid />
                            </Navbar.Brand>
                        </Link>
                    </Nav>
                    <Nav className='d-flex align-items-center me-auto ms-auto flex-row'>
                        {pathname === "/dashboard" ?
                            <div className='d-flex align-items-center'>
                                <Image src={profileIcon} fluid />
                                <NavDropdown title="James Smith" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Settings
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Other Settings
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <a href="#" className='ps-4' onClick={handleShow} ><Image src={hamburgerIcon} fluid /></a>
                            </div>
                            :
                            <div>
                                <BsPersonCircle className='me-2' />
                                <Link to={'/login'}>
                                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-black'>Sign in</a>
                                </Link>
                                <span className='px-2'>or</span>
                                <Link to={'/signup'}>
                                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-black'>Create account</a>
                                </Link>
                                <a href="#" className='ps-4' onClick={handleShow} ><Image src={hamburgerIcon} fluid /></a>
                            </div>
                        }
                        {/* offcanvas */}
                        <Offcanvas show={show} onHide={handleClose} placement='top'>
                            <Offcanvas.Body>
                                <Nav className="me-auto ms-auto text-center">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#about">About</Nav.Link>
                                    <Nav.Link href="#short-let">Short-Let</Nav.Link>
                                    <Nav.Link href="#listing">Listing</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default NavBarComp