import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { MdArrowRightAlt } from "react-icons/md";
import { GrMap } from "react-icons/gr";
import Form from 'react-bootstrap/Form';
import { IoBedOutline } from "react-icons/io5";
import calenderIcon from '../assets/images/calender.svg'
import Image from 'react-bootstrap/Image';
import guestIcon from '../assets/images/guest.svg'
import listingImg1 from '../assets/images/listingimg1.png'
import listingImg2 from '../assets/images/listingimg2.png'
import listingImg3 from '../assets/images/listingimg3.png'
import bedIcon from '../assets/images/bed.svg'
import bathIcon from '../assets/images/bath.svg'
import parkingIcon from '../assets/images/parking.svg'

const GroupLisitng = () => {
    return (
        <div className='py-4'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='d-flex align-items-end' >
                            <h2 className='me-2 text-capitalize'>Fire Property group
                                listings</h2>
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
            <Container className='py-lg-5 py-3'>
                <Row className='border border-secondary align-items-center p-3' id='groupBorder' style={{ borderRadius: "100px" }}>
                    <Col lg={2}>
                        <div className='d-flex mb-3 mb-lg-0 mb-md-3'>
                            <span className='border border-black rounded-circle p-2'>
                                <GrMap />
                            </span>
                            <Form.Select className='border-0'>
                                <option>Book your Stay</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className='d-flex mb-3 mb-lg-0 mb-md-3'>
                            <span className='border border-black rounded-circle p-2'>
                                <Image src={calenderIcon} fluid />
                            </span>
                            <Form.Select className='border-0'>
                                <option>Check In Date</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className='d-flex mb-3 mb-lg-0 mb-md-3'>
                            <span className='border border-black rounded-circle p-2'>
                                <Image src={calenderIcon} fluid />
                            </span>
                            <Form.Select className='border-0'>
                                <option>Check Out Date</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className='d-flex mb-3 mb-lg-0 mb-md-3'>
                            <span className='border border-black rounded-circle p-2'>
                                <Image src={guestIcon} fluid />
                            </span>
                            <Form.Select className='border-0'>
                                <option>Check Out Date</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className='d-flex mb-3 mb-lg-0 mb-md-3'>
                            <span className='border border-black rounded-circle p-2'>
                                <IoBedOutline />
                            </span>
                            <Form.Select className='border-0'>
                                <option>Select Bed & Bath</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col className='text-end mb-3 mb-lg-0 mb-md-3' lg={2}>
                        <Button variant="warning" className='group-btn' style={{ backgroundColor: "#FFD03F", borderRadius: "46px" }}>Search</Button>
                    </Col>
                </Row>

            </Container>
            <Container>
                <Row>
                    <Col lg={4} >
                        <div class="card h-100 border-0 background-transparent">
                            <div class="info-wrap">
                                <Image src={listingImg1} alt="" class="listingimg img-fluid" id='listingimg' />
                                <div class="pt-2">
                                    <p class="fw-semibold">Highest infinity Pool in Downtown</p>
                                    <p>Business Bay, Australia</p>
                                    <div class="d-flex">
                                        <div class="me-3">
                                            <Image src={bedIcon} alt="" class="img-fluid" />
                                            <span className='ps-2'>2 Beds</span>
                                        </div>
                                        <div class="mx-3">
                                            <Image src={bathIcon} alt="" class="img-fluid" />
                                            <span className='ps-2'>2 Bath</span>
                                        </div>
                                        <div class="mx-3">
                                            <Image src={parkingIcon} alt="" class="img-fluid" />
                                            <span className='ps-2'>1 Parking</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div class="card h-100 border-0 background-transparent">
                            <div class="info-wrap">
                                <Image src={listingImg2} alt="" class="img-fluid listingimg" id='listingimg' />
                                <div class="pt-2">
                                    <p class="fw-semibold">Highest infinity Pool in Downtown</p>
                                    <p>Business Bay, Australia</p>
                                    <div class="d-flex">
                                        <div class="me-3">
                                            <Image src={bedIcon} alt="" class="img-fluid" />
                                            <span className='ps-2'>2 Beds</span>
                                        </div>
                                        <div class="mx-3">
                                            <Image src={bathIcon} alt="" class="img-fluid" />
                                            <span className='ps-2'>2 Bath</span>
                                        </div>
                                        <div class="mx-3">
                                            <Image src={parkingIcon} alt="" class="img-fluid" />
                                            <span className='ps-2'>1 Parking</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col lg={4}>
                        <div class="card h-100 border-0 background-transparent">
                            <div class="info-wrap">
                                <Image src={listingImg3} alt="" class="listingimg img-fluid rounded-2" id='listingimg' />
                                <div class="pt-2">
                                    <p class="fw-semibold">Highest infinity Pool in Downtown</p>
                                    <p>Business Bay, Australia</p>
                                    <div class="d-flex">
                                        <div class="me-3">
                                            <Image src={bedIcon} alt="" class="img-fluid" />
                                            <span className='ps-2'>2 Beds</span>
                                        </div>
                                        <div class="mx-3">
                                            <Image src={bathIcon} alt="" class="img-fluid" />
                                            <span className='ps-2'>2 Bath</span>
                                        </div>
                                        <div class="mx-3">
                                            <Image src={parkingIcon} alt="" class="img-fluid" />
                                            <span className='ps-2'>1 Parking</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GroupLisitng