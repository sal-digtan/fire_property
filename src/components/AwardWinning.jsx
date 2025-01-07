import React from 'react'
import Container from 'react-bootstrap/Container';
import { FaArrowCircleDown } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { MdArrowRightAlt } from "react-icons/md";

const AwardWinning = () => {
    return (
        <div className='py-lg-5'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='d-flex align-items-end' >
                            <h2 className='me-2'>Australia's award-winning, 360° real estate management consultancy</h2>
                        </div>
                    </Col>
                    <Col lg={6} >
                        <div className='d-flex align-items-start flex-column' >
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div>
                            <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3'><MdArrowRightAlt size={28} /></Button>
                            <a href="" className='text-decoration-none text-black'><span className='ps-2'>Free Consultation</span></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='statsbg mt-5'>
                <Row className='text-center p-5'>
                    <Col lg={4} className='mb-5'>
                        <div className='border-bottom border-secondary border-end'>
                            <h2 style={{ color: "#FFD03F" }}>94%</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>The Highest Occupancy Rate In The Short-Let Market</p>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-5'>
                        <div className='border-bottom border-secondary border-end'>
                            <h2 style={{ color: "#FFD03F" }}>500+</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>Renovation Fit-Out & interior design projects</p>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-5'>
                        <div className='border-bottom border-secondary border-end'>
                            <h2 style={{ color: "#FFD03F" }}>200+</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>a diverse team across multiple disciplines</p>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-5'>
                        <div className='border-bottom border-secondary border-end'>
                            <h2 style={{ color: "#FFD03F" }}>100%</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>Data-driven, trusted expertise</p>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-5 '>
                        <div className='border-bottom border-secondary border-end'>
                            <h2 style={{ color: "#FFD03F" }}>750M</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>real estate assets under advisement</p>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-5'>
                        <div className='border-bottom border-secondary border-end'>
                            <h2 style={{ color: "#FFD03F" }}>5 Star</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>Ratings from 3 out of 4 short-let guests</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AwardWinning