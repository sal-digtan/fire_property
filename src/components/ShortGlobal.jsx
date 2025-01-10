import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { MdArrowRightAlt } from "react-icons/md";
import graphBars from '../assets/images/GraphBars.png'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import consultImg from '../assets/images/consult.png'

const ShortGlobal = () => {
    return (
        <>
            <Container fluid className='p-0 m-0 globalbg d-flex align-items-center justify-content-center'>
                <Row className='p-5'>
                    <Col>
                        <div className='text-center pt-5 mt-5'>
                            <h2 className='text-capitalize text-white-50'>Australia vs. Global
                                short-let markets</h2>
                        </div>
                        <div className='mb-5 mb-lg-0 text-center mb-3'>
                            <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3 text-white'><MdArrowRightAlt size={28} /></Button>
                            <a href="" className='text-decoration-none text-white'><span className='ps-2'>Free Consultation</span></a>
                        </div>
                        <div>
                            <Image src={graphBars} fluid />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='py-lg-5'>
                <Row>
                    <Col lg={6}>
                        <Card className='h-100' style={{ backgroundColor: "#FFD03F" }} >
                            <Card.Body>
                                <div className='d-flex justify-content-between pb-5'>
                                    <Button variant="dark" className='rounded-5 text-warning'>Agents</Button>
                                    <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3'><MdArrowRightAlt size={28} /></Button>
                                </div>
                                <Card.Title className='text-center text-capitalize'>Maximize your earnings as an agent with us!</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className='h-100' style={{ backgroundColor: "#EEEFEF" }} >
                            <Card.Body>
                                <div className='d-flex justify-content-between pb-5'>
                                    <Button variant="dark" className='rounded-5 text-white'>Agents</Button>
                                    <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3'><MdArrowRightAlt size={28} /></Button>
                                </div>
                                <Card.Title className='text-center text-capitalize'>Maximize your earnings as an agent with us!</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className='text-center py-lg-5'>
                    <h2 className='text-capitalize'>Book your free consultation with the <span className='d-block'>team <Image src={consultImg} fluid /> today</span></h2>
                </div>
            </Container>
        </>
    )
}

export default ShortGlobal