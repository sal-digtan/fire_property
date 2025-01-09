import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import sendIcon from '../assets/images/sendIcon.svg'

const Connect = () => {
    return (
        <Container fluid className='connectbg py-lg-5 d-flex align-items-center justify-content-center'>
            <Row>
                <Col>
                    <div className='text-center mb-4'>
                        <h2 className='text-white'>
                            Connect with The
                            <span className='d-block' style={{ color: "#FFD03F" }} >Fire Property Group</span>
                        </h2>
                    </div>
                    <Form>
                        <Form.Group className="mb-3 d-flex align-items-center justify-content-center position-relative" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your email" className='p-3' />
                            <div className='position-absolute top-0 end-0 translate-middle-x'>
                                <Image src={sendIcon} fluid />
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Connect