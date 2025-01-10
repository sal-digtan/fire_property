import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { MdArrowRightAlt } from "react-icons/md";
import Image from 'react-bootstrap/Image';
import successImg from '../assets/images/successImg.png'

const SuccesStory = () => {
    return (
        <Container className='py-lg-5'>
            <Row>
                <Col>
                    <div className='text-center'>
                        <h2>Success story: Palm Views East</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='mb-5 mb-lg-0 text-center'>
                        <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3'><MdArrowRightAlt size={28} /></Button>
                        <a href="" className='text-decoration-none text-black'><span className='ps-2'>Free Consultation</span></a>
                    </div>
                    <div className='pt-5'>
                        <Image src={successImg} fluid />
                    </div>
                    <Row className='align-items-center pt-5'>
                        <div className='border-bottom border-secondary d-flex align-items-center p-2'>
                            <Col lg={6}>
                                <p className='fw-bold'>Purchase price</p>
                                <p>The investor acquired the property for</p>
                            </Col>
                            <Col lg={6} className='text-end'>
                                <h2 style={{ color: "#FFD03F" }} className='fw-bold'>AUD 930,000</h2>
                            </Col>
                        </div>
                        <div className='border-bottom border-secondary d-flex align-items-center p-2'>
                            <Col lg={6}>
                                <p className='fw-bold'>Interior furnishing</p>
                                <p>Interiors by AirDXB provided furnishings at a cost of</p>
                            </Col>
                            <Col lg={6} className='text-end'>
                                <h2 style={{ color: "#FFD03F" }} className='fw-bold'>AUD $26,500</h2>
                            </Col>
                        </div>
                        <div className='border-bottom border-secondary d-flex align-items-center p-2'>
                            <Col lg={6}>
                                <p className='fw-bold'>15% returns on the Dubai short-let market</p>
                                <p>Rental earnings of over two years</p>
                            </Col>
                            <Col lg={6} className='text-end'>
                                <h2 style={{ color: "#FFD03F" }} className='fw-bold'>$AUD 182,991.58</h2>
                            </Col>
                        </div>
                        <div className='border-bottom border-secondary d-flex align-items-center p-2'>
                            <Col lg={6}>
                                <p className='fw-bold'>Quick sale!</p>
                                <p>The property was successfully sold within just one week for</p>
                            </Col>
                            <Col lg={6} className='text-end'>
                                <h2 style={{ color: "#FFD03F" }} className='fw-bold'>$AUD 1,325,000</h2>
                            </Col>
                        </div>
                        <div className='border-bottom border-secondary d-flex align-items-center p-2'>
                            <Col lg={6}>
                                <p className='fw-bold'>57.6% return from initial investment</p>
                                <p>Combined returns, after deducting the cost of furnishing</p>
                            </Col>
                            <Col lg={6} className='text-end'>
                                <h2 style={{ color: "#FFD03F" }} className='fw-bold'>$AUD 551,491.58</h2>
                            </Col>
                        </div>
                        <div className='border-bottom border-secondary d-flex align-items-center p-2'>
                            <Col lg={6}>
                                <p className='fw-bold'>Impressive returns</p>
                                <p>Overall return on investment was approximately 10% of net returns</p>
                            </Col>
                            <Col lg={6} className='text-end'>
                                <h2 style={{ color: "#FFD03F" }} className='fw-bold'>42.47%</h2>
                            </Col>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SuccesStory