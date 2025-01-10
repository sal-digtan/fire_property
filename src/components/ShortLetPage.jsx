import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import scrollBtn from '../assets/images/scrollbtn.svg'
import Image from 'react-bootstrap/Image';
import SearchBox from './SearchBox';
import darkMap from '../assets/images/Dark Map1.png'
import Button from 'react-bootstrap/Button';
import { MdArrowRightAlt } from "react-icons/md";
import expIcon1 from '../assets/images/expicon1.svg'
import propExp from '../assets/images/propertyexperience.png'
import audGraph from '../assets/images/audGraph.png'
import countriesLabel from '../assets/images/Countries.png'
import dot from '../assets/images/dot.svg'
import yellowDot from '../assets/images/yellowdot.svg'
import greyDot from '../assets/images/greydot.svg'
import building from '../assets/images/Building.png'

const ShortLetPage = () => {
    return (
        <Container className='py-lg-5 m-0 p-0' fluid>
            <Row>
                <Col>
                    <div className='text-center'>
                        <h2>Short-let as part of your
                            investment strategy.</h2>
                        <a href=""><Image src={scrollBtn} fluid className='my-5' /></a>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </Col>
            </Row>
            <SearchBox />
            <div>
                <Image src={darkMap} fluid />
            </div>
            <div className='statsbg mt-5 p-5'>
                <div>
                    <h2 className='text-capitalize text-center text-white-50'>
                        why partner with the <span className='text-white'>Fire Property group?</span>
                    </h2>
                </div>
                <div className='mb-5 mb-lg-0 text-center'>
                    <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3 text-white'><MdArrowRightAlt size={28} /></Button>
                    <a href="" className='text-decoration-none text-white'><span className='ps-2'>Free Consultation</span></a>
                </div>
                <Row className='text-center p-5'>
                    <Col lg={4} className='mb-5 position-relative'>
                        <div className='custom-borders'>
                            <h2 style={{ color: "#FFD03F" }}>94%</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>The Highest Occupancy Rate In The Short-Let Market</p>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-5 position-relative'>
                        <div className='custom-borders'>
                            <h2 style={{ color: "#FFD03F" }}>500+</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>Renovation Fit-Out & interior design projects</p>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-5 position-relative'>
                        <div className='custom-borders'>
                            <h2 style={{ color: "#FFD03F" }}>200+</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>a diverse team across multiple disciplines</p>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-5 position-relative'>
                        <div className='custom-borders'>
                            <h2 style={{ color: "#FFD03F" }}>100%</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>Data-driven, trusted expertise</p>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-5 position-relative '>
                        <div className='custom-borders'>
                            <h2 style={{ color: "#FFD03F" }}>750M</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>real estate assets under advisement</p>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-5 position-relative'>
                        <div className='custom-borders'>
                            <h2 style={{ color: "#FFD03F" }}>5 Star</h2>
                            <p className='text-white text-capitalize' style={{ fontSize: "14px" }}>Ratings from 3 out of 4 short-let guests</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <Container className='py-lg-5'>
                <Row>
                    <Col>
                        <div className='text-center'>
                            <h2>The Fire Property Group Experience</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className='mb-5 mb-lg-0 text-center'>
                            <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3'><MdArrowRightAlt size={28} /></Button>
                            <a href="" className='text-decoration-none text-black'><span className='ps-2'>Free Consultation</span></a>
                        </div>
                    </Col>
                    <Row className='bgimg'>
                        <Col lg={4} className='shadow d-flex align-items-center justify-content-center mb-3'>
                            <Image src={expIcon1} fluid width={61} />
                            <div className='ps-2'>
                                <span className='d-block fw-bold'>Marketing & Listing Creating</span>
                                <span className='d-block'>Lorem Ipsum is simply dummy text of the printing.</span>
                            </div>
                        </Col>
                        <Col lg={4} >
                            {/* <Image src={propExp} fluid /> */}
                        </Col>
                        <Col lg={4} className='shadow d-flex align-items-center justify-content-center mb-3'>
                            <Image src={expIcon1} fluid width={61} />
                            <div className='ps-2'>
                                <span className='d-block fw-bold'>Marketing & Listing Creating</span>
                                <span className='d-block'>Lorem Ipsum is simply dummy text of the printing.</span>
                            </div>
                        </Col>
                        <Col lg={4} className='shadow d-flex align-items-center justify-content-center mb-3'>
                            <Image src={expIcon1} fluid width={61} />
                            <div className='ps-2'>
                                <span className='d-block fw-bold'>Marketing & Listing Creating</span>
                                <span className='d-block'>Lorem Ipsum is simply dummy text of the printing.</span>
                            </div>
                        </Col>
                        <Col lg={4}></Col>
                        <Col lg={4} className='shadow d-flex align-items-center justify-content-center mb-3'>
                            <Image src={expIcon1} fluid width={61} />
                            <div className='ps-2'>
                                <span className='d-block fw-bold'>Marketing & Listing Creating</span>
                                <span className='d-block'>Lorem Ipsum is simply dummy text of the printing.</span>
                            </div>
                        </Col>
                        <Col lg={4} className='shadow d-flex align-items-center justify-content-center mb-3'>
                            <Image src={expIcon1} fluid width={61} />
                            <div className='ps-2'>
                                <span className='d-block fw-bold'>Marketing & Listing Creating</span>
                                <span className='d-block'>Lorem Ipsum is simply dummy text of the printing.</span>
                            </div>
                        </Col>
                        <Col lg={4} ></Col>
                        <Col lg={4} className='shadow d-flex align-items-center justify-content-center mb-3'>
                            <Image src={expIcon1} fluid width={61} />
                            <div className='ps-2'>
                                <span className='d-block fw-bold'>Marketing & Listing Creating</span>
                                <span className='d-block'>Lorem Ipsum is simply dummy text of the printing.</span>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Container className='py-lg-5'>
                <Row>
                    <Col>
                        <div className='text-center mb-3'>
                            <h2>Australia vs. Global short-let markets</h2>
                            <div className='d-flex align-items-center justify-content-evenly'>
                                <p><Image src={dot} fluid className='pe-2' /> Av. size of 1 bed apartment (sqm)</p>
                                <p><Image src={yellowDot} fluid className='pe-2' /> ADR (AUD)</p>
                                <p><Image src={greyDot} fluid className='pe-2' />12m Revenue (USD)</p>
                            </div>
                        </div>
                        <div className='mb-5 mb-lg-0 text-center mb-3'>
                            <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3'><MdArrowRightAlt size={28} /></Button>
                            <a href="" className='text-decoration-none text-black'><span className='ps-2'>Free Consultation</span></a>
                        </div>
                        <Image src={audGraph} fluid className='pt-5' />
                        <Image src={countriesLabel} fluid />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='bgrefer p-5 align-items-center'>
                    <Col className='bldgbg'>
                        
                    </Col>
                    <Col>
                        <div className='text-white'>
                            <h2 className='text-capitalize'>Refer a short-let client to us to earn AUS, starting from <span style={{ color: "#FFD03F" }}>AUD 2,000.</span></h2>
                        </div>
                        <div className='mb-5 mb-lg-0 text-end mb-3'>
                            <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3 text-white'><MdArrowRightAlt size={28} /></Button>
                            <a href="" className='text-decoration-none text-white'><span className='ps-2'>Free Consultation</span></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ShortLetPage