import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import telIcon from '../assets/images/telicon.svg'
import Image from 'react-bootstrap/Image';
import sendmsgIcon from '../assets/images/sendmsgicon.svg'
import mapIcon from '../assets/images/mapicon.svg'

const ContactPage = () => {
    return (
        <Container className='py-lg-5'>
            <Row>
                <Col lg={6}>
                    <Card style={{ backgroundColor: "#070A0F" }}>
                        <Card.Body>
                            <Card.Title className='text-center text-white-50'><h2>Our Contact</h2></Card.Title>
                            <Card.Text className='text-center text-white-50'>
                                Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
                            </Card.Text>
                            <div className='d-flex align-items-center border-bottom border-secondary p-3'>
                                <div>
                                    <Image src={telIcon} fluid />
                                </div>
                                <div className='ps-2 text-white-50'>
                                    <span className='d-block'>Phone</span>
                                    <span className='d-block'>+1 234 567 8901</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center border-bottom border-secondary p-3'>
                                <div>
                                    <Image src={sendmsgIcon} fluid />
                                </div>
                                <div className='ps-2 text-white-50'>
                                    <span className='d-block'>Email</span>
                                    <span className='d-block'>info@firepropertygroup.com</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center border-bottom border-secondary p-3'>
                                <div>
                                    <Image src={mapIcon} fluid />
                                </div>
                                <div className='ps-2 text-white-50'>
                                    <span className='d-block'>Address</span>
                                    <span className='d-block'>411 University St, Seattle, Australia</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage