import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MdArrowRightAlt } from "react-icons/md";

const Services = () => {
    return (
        <div className='py-5 mb-5'>
            <Container fluid>
                <Row className='servicebg position-relative px-3'>
                    <Col>
                        <Card style={{ width: '20rem' }} className='position-absolute top-50 servicecard-fix' id='servicecard-fix'>
                            <Card.Body>
                                <Card.Title>Our Services</Card.Title>
                                <Card.Text>
                                    <ul className='list-unstyled d-flex align-items-end flex-column'>
                                        <li className='border-top border-bottom p-2'>
                                            <a href="" className='text-decoration-none text-black'><span>Short-Let Management</span>
                                                <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3 ms-4'><MdArrowRightAlt size={28} /></Button>
                                            </a>
                                        </li>
                                        <li className='border-top border-bottom p-2'>
                                            <a href="" className='text-decoration-none text-black'><span>Real Estate Investment</span></a>
                                            <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3 ms-4'><MdArrowRightAlt size={28} /></Button>
                                        </li>
                                        <li className='border-top border-bottom p-2'>
                                            <a href="" className='text-decoration-none text-black'><span>Commercial Real Estate</span>
                                                <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3 ms-4'><MdArrowRightAlt size={28} /></Button>
                                            </a>
                                        </li>
                                        <li className='border-top border-bottom p-2'>
                                            <a href="" className='text-decoration-none text-black'><span>Renovation & Fit-Outs</span>
                                                <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3 ms-4'><MdArrowRightAlt size={28} /></Button>
                                            </a>
                                        </li>
                                        <li className='border-top border-bottom p-2'>
                                            <a href="" className='text-decoration-none text-black'><span>Interior Design</span>
                                                <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3 ms-4'><MdArrowRightAlt size={28} /></Button>
                                            </a>
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <div className='position-absolute top-100 service-fix'>
                            <h2>Your Australia
                                real estate investments partner:
                                explore The Fire Property Group</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services