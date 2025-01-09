import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import teamImg1 from '../assets/images/teamimg1.png'
import teamImg2 from '../assets/images/teamimg2.png'
import teamImg3 from '../assets/images/teamimg3.png'
import teamImg4 from '../assets/images/teamimg4.png'
import teamImg5 from '../assets/images/teamimg5.png'
import Card from 'react-bootstrap/Card';

const Team = () => {
    return (
        <Container className='py-lg-5'>
            <Row>
                <Col>
                    <div className='text-center'>
                        <h2 className='text-capitalize'>Our dedicated team</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
                    </div>
                    <Row className='d-flex align-items-center justify-content-center'>
                        <Col lg={2} className='position-relative' style={{ marginTop: "200px" }}>
                            <Image src={teamImg1} fluid rounded />
                            <div className='position-absolute top-100 start-50 translate-middle'>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body className='text-center'>
                                        <Card.Title style={{ fontSize: "16px" }}>Jenny Mars</Card.Title>
                                        <Card.Text style={{ fontSize: "14px" }}>
                                            Head of Wrapped
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={2} className='position-relative' style={{ marginTop: "140px" }}>
                            <Image src={teamImg2} fluid rounded />
                            <div className='position-absolute top-100 start-50 translate-middle'>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body className='text-center'>
                                        <Card.Title style={{ fontSize: "16px" }}>Jimme Kate</Card.Title>
                                        <Card.Text style={{ fontSize: "14px" }}>
                                            Head of Relations
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={2} className='position-relative' style={{ marginTop: "100px" }}>
                            <Image src={teamImg3} fluid rounded />
                            <div className='position-absolute top-100 start-50 translate-middle'>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body className='text-center'>
                                        <Card.Title style={{ fontSize: "16px" }}>Eve Scott</Card.Title>
                                        <Card.Text style={{ fontSize: "14px" }}>
                                            head of BD
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={2} className='position-relative' style={{ marginTop: "60px" }}>
                            <Image src={teamImg4} fluid rounded />
                            <div className='position-absolute top-100 start-50 translate-middle'>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body className='text-center'>
                                        <Card.Title style={{ fontSize: "16px" }}>James Smith</Card.Title>
                                        <Card.Text style={{ fontSize: "14px" }}>
                                            General Manager
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={2} className='position-relative' style={{ marginTop: "20px" }}>
                            <Image src={teamImg5} fluid rounded />
                            <div className='position-absolute top-100 start-50 translate-middle'>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body className='text-center'>
                                        <Card.Title style={{ fontSize: "16px" }}>Gina Bruno</Card.Title>
                                        <Card.Text style={{ fontSize: "14px" }}>
                                            Founder & CEO
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Team