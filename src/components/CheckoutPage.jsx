import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import cardsPayment from '../assets/images/paymentcards.png'
import ccv from '../assets/images/ccv.png'
import Modal from 'react-bootstrap/Modal';
import modalImage from '../assets/images/modalImg.png'

const CheckoutPage = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className='py-lg-5'>
            <Row>
                <Col lg={7}>
                    <div>
                        <h2>Booking Address</h2>
                    </div>
                    <Card className='border-0 shadow'>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="email" placeholder="" className='border-0 border-bottom border-secondary rounded-0' />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="email" placeholder="" className='border-0 border-bottom border-secondary rounded-0' />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="" className='border-0 border-bottom border-secondary rounded-0' />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control type="email" placeholder="" className='border-0 border-bottom border-secondary rounded-0' />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Create an account for later use" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className='pt-3'>
                        <h2>Payment Method</h2>
                    </div>
                    <Card className='border-0 shadow'>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col lg={12}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Check
                                                    inline
                                                    label="Pay with Credit Card"
                                                    name="group1"
                                                    type="radio"
                                                />
                                            </Form.Group>
                                            <Image src={cardsPayment} fluid />
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Email Address" className='border-0 border-bottom border-secondary rounded-0' />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={4}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Card Number</Form.Label>
                                            <Form.Control type="text" placeholder="1234 1234 1234 1234 " className='border-0 border-bottom border-secondary rounded-0' />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={4}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Expiration Date</Form.Label>
                                            <Form.Control type="text" placeholder="MM / YY " className='border-0 border-bottom border-secondary rounded-0' />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={4}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Security Date</Form.Label>
                                            <div className='d-flex align-items-center'>
                                                <Form.Control type="text" placeholder="CVC " className='border-0 border-bottom border-secondary rounded-0' />
                                                <Image src={ccv} fluid />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select aria-label="Default select example" className='border-0 border-bottom border-secondary rounded-0'>
                                            <option>Australia</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={5}>
                    <div>
                        <h2>Booking Preview</h2>
                    </div>
                    <Card className='border-0 shadow'>
                        <Card.Body>
                            <Card.Text>
                                <div className='d-flex justify-content-between align-items-center border-bottom border-secondary'>
                                    <p>Property Name</p>
                                    <p className='fw-bold'>Highest infinity Pool in Australia</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center border-bottom border-secondary'>
                                    <p>Property ID</p>
                                    <p className='fw-bold'>123456</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center border-bottom border-secondary'>
                                    <p>Move In</p>
                                    <p className='fw-bold'>27 / 09 / 2024</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center border-bottom border-secondary'>
                                    <p>Move Out</p>
                                    <p className='fw-bold'>30 / 09 / 2024</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center border-bottom border-secondary'>
                                    <p>Guests</p>
                                    <p className='fw-bold'>5</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='border-0 shadow my-3'>
                        <Card.Body>
                            <Card.Text>
                                <div className='d-flex justify-content-between align-items-center border-bottom border-secondary'>
                                    <p>Subtotal</p>
                                    <p>AUD 3,491.00</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center border-bottom border-secondary'>
                                    <p>Cleaning Charges</p>
                                    <p>AUD 350</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center border-bottom border-secondary'>
                                    <p>Discount</p>
                                    <p>AUD 175</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center border-bottom border-secondary'>
                                    <p>Grand Total</p>
                                    <p className='fw-bold'>AUD 3,666.00</p>
                                </div>
                                <div className='py-3'>
                                    <Form.Check
                                        type="checkbox"
                                        label="Please check to acknowledge our Terms and Conditions and Privacy Policy"
                                        style={{ fontSize: "12px" }}
                                    />
                                </div>
                                <div className='py-4'>
                                    <Button onClick={handleShow} variant="warning" className='w-100 fw-bold rounded-5' style={{
                                        background: "linear-gradient(91.03deg, #FFD03F -9.72%, #FCC939 12.77%, #F5B82A 42.01%, #EA9C12 76.88%, #E58E06 91.5%, #DF8800 102.75%)"
                                    }}>Pay 3,666.00</Button>
                                </div>
                                {/* modal code */}
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header className='text-center'>
                                        <Modal.Title >
                                            <h2 >
                                                Your Booking is Confirmed
                                            </h2>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <p className='text-center'>Check details on your dashboard or email.
                                        Enjoy your stay with FirePropertyGroup
                                    </p>
                                    <Modal.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Image src={modalImage} fluid />
                                            </Col>
                                            <Col lg={6}>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Booking Reference No.</p>
                                                    <p className='fw-bold'>123456</p>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Total Guests</p>
                                                    <p className='fw-bold'>5</p>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Check In</p>
                                                    <p className='fw-bold'>27 / 09 / 2024</p>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Check Out</p>
                                                    <p className='fw-bold'>30 / 09 / 2024</p>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Amount Paid</p>
                                                    <p className='fw-bold'>AUD 3,000</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="warning" className='w-100 fw-bold rounded-5' style={{
                                            background: "linear-gradient(91.03deg, #FFD03F - 9.72 %, #FCC939 12.77 %, #F5B82A 42.01 %, #EA9C12 76.88 %, #E58E06 91.5 %, #DF8800 102.75 %)"
                                        }} onClick={handleClose}>
                                            Back to Home
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                {/* modal code */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CheckoutPage