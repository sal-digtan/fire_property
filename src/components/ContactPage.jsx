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
import Form from 'react-bootstrap/Form';
import contactFormIcon1 from '../assets/images/contactformicon1.png'
import contactFormIcon2 from '../assets/images/contactformicon2.png'
import contactFormIcon3 from '../assets/images/contactformicon3.png'
import contactFormIcon4 from '../assets/images/contactformicon4.png'

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
                <Col lg={6}>
                    <Card style={{ backgroundColor: "#fff" }} className='shadow-lg border-0'>
                        <Card.Body>
                            <Card.Title className='text-center'><h2>Ready to Get Started?</h2></Card.Title>
                            <Card.Text className='text-center'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Card.Text>
                            <Form className='p-3'>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <div className='d-flex border-bottom border-secondary'>
                                                <Image src={contactFormIcon1} width={24} height={24} />
                                                <Form.Control type="text" className='border-0' placeholder="Full Name" />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <div className='d-flex border-bottom border-secondary'>
                                                <Image src={contactFormIcon2} width={24} height={24} />
                                                <Form.Control type="number" className='border-0' placeholder="Phone" />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <div className='d-flex border-bottom border-secondary'>
                                                <Image src={contactFormIcon3} width={24} height={24} />
                                                <Form.Control type="email" className='border-0' placeholder="name@example.com" />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <div className='d-flex border-bottom border-secondary'>
                                                <Image src={contactFormIcon4} width={24} height={24} />
                                                <Form.Control as="textarea" className='border-0' rows={3} />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className='py-3'>
                                        <div className="mb-3 text-end d-flex justify-content-between">
                                            <p className='text-capitalize fw-bold'>Are you an agent?</p>
                                            <div>
                                                <Form.Check
                                                    inline
                                                    label="Yes"
                                                    name="group1"
                                                    type='radio'
                                                />
                                                <Form.Check
                                                    inline
                                                    label="No"
                                                    name="group1"
                                                    type='radio'
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12} className='border-bottom border-secondary'>
                                        <div>
                                            <p>* By submitting this form, you agree to our <span className='text-decoration-underline fw-bold'> terms and conditions</span> and consent to the processing of your personal data in accordance with our privacy policy.</p>
                                        </div>
                                    </Col>
                                    <Col lg={12} className='py-5'>
                                        <div>
                                            <Button variant="warning" className='w-100 fw-bold rounded-5' style={{ background: "linear-gradient(91.03deg, #FFD03F -9.72%, #FCC939 12.77%, #F5B82A 42.01%, #EA9C12 76.88%, #E58E06 91.5%, #DF8800 102.75%)" }}>Login</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage