import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import mailIcon from '../assets/images/mailIcon.png'
import backArrow from '../assets/images/backArrow.png'
import { Link } from 'react-router-dom'

const ForgotPasswordPage = () => {
    return (
        <Container className='loginbg d-flex justify-content-center align-items-center' fluid>
            <Row>
                <Col>
                    <div className='position-absolute top-0 start-0 p-4'>
                        <Link to={'/'}>
                            <Button variant='light' className='rounded-circle' style={{ width: "54px", height: "54px" }}>
                                <Image src={backArrow} fluid />
                            </Button>
                        </Link>
                    </div>
                    <Card style={{
                        width: '500px', border: '1.5px solid #fff',
                        background: "linear-gradient(233.31deg, #FFFFFF 2.14%, rgba(255, 255, 255, 0) 57.92%, #FFFFFF 100%)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "16px"
                    }}
                        className='bg-transparent width-fix'
                    >
                        <Card.Body>
                            <Card.Title className='text-center pb-3'>
                                <h2>Forgot Password?</h2>
                            </Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <div className='d-flex align-items-center position-relative'>
                                        <Form.Control type="email" placeholder="Email" className='rounded-5 py-3' />
                                        <div className='position-absolute top-0 end-0 translate-middle-x py-3 px-2'>
                                            <Image src={mailIcon} fluid />
                                        </div>
                                    </div>
                                </Form.Group>
                            </Form>
                            <Button variant="warning" className='w-100 fw-bold rounded-5 py-3 mt-3' style={{
                                background: "linear-gradient(91.03deg, #FFD03F - 9.72 %, #FCC939 12.77 %, #F5B82A 42.01 %, #EA9C12 76.88 %, #E58E06 91.5 %, #DF8800 102.75 %)"
                            }}>Send</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default ForgotPasswordPage