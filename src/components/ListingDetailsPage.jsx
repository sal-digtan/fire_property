import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import Image from 'react-bootstrap/Image';
import detailThumb1 from '../assets/images/detailssliderthumb1.png'
import detailThumb2 from '../assets/images/detailssliderthumb2.png'
import detailThumb3 from '../assets/images/detailssliderthumb3.png'
import detailThumb4 from '../assets/images/detailssliderthumb4.png'
import detailMain from '../assets/images/detailsslidermain.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import calenderIcon from '../assets/images/calender.png'
import guestIcon from '../assets/images/guest.svg'
import Card from 'react-bootstrap/Card';
import bedIcon from '../assets/images/bed.png'
import bathIcon from '../assets/images/bath.svg'
import parkingIcon from '../assets/images/parking.svg'
import listingSliderImg1 from '../assets/images/listingdetailimg1.png'
import listingSliderImg2 from '../assets/images/listingdetailimg2.png'
import listingSliderImg3 from '../assets/images/listingdetailimg3.png'
import heartIcon from '../assets/images/hearticon.png'

const ListingDetailsPage = () => {

    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    var settings1 = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <div className='mb-3'>
                        <Image src={detailThumb1} fluid />
                    </div>
                    <div className='mb-3'>
                        <Image src={detailThumb2} fluid />
                    </div>
                </Col>
                <Col lg={6}>
                    <Slider {...settings} className='position-relative'>
                        <div>
                            <Image src={detailMain} fluid />
                        </div>
                        <div>
                            <Image src={detailMain} fluid />
                        </div>
                        <div>
                            <Image src={detailMain} fluid />
                        </div>
                        <div>
                            <Image src={detailMain} fluid />
                        </div>
                        <div>
                            <Image src={detailMain} fluid />
                        </div>
                    </Slider>
                    <div>
                        <Button variant="warning" className='w-100 fw-bold rounded-5'>Book Now</Button>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className='mb-3'>
                        <Image src={detailThumb3} fluid />
                    </div>
                    <div className='mb-3'>
                        <Image src={detailThumb4} fluid />
                    </div>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div>
                            <h2>Highest infinity Pool in Australia</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ready More</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h2>Book This Property</h2>
                            <Form style={{ backgroundColor: "#070A0F" }} className='p-3 rounded-3'>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <div className='d-flex position-relative'>
                                                <Form.Control type="email" className='rounded-5' placeholder="Select Move In Date" />
                                                <Image src={calenderIcon} fluid style={{ position: "absolute", top: "20%", left: "88%" }} />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <div className='d-flex position-relative'>
                                                <Form.Control type="email" className='rounded-5' placeholder="Select Move out Date" />
                                                <Image src={calenderIcon} fluid style={{ position: "absolute", top: "20%", left: "88%" }} />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <div className='d-flex position-relative'>
                                        <Form.Control type="password" className='rounded-5' placeholder="Select Number of Guests" />
                                        <Image src={guestIcon} fluid style={{ position: "absolute", top: "13%", left: "92%" }} />
                                    </div>
                                </Form.Group>
                                <Button variant="warning" className='w-100 fw-bold rounded-5' type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div>
                            <h2>Overview</h2>
                            <Card className='shadow border-0'>
                                <Card.Body className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <Image src={bedIcon} fluid className='pe-2' />
                                        <span className='pe-2'>2 Beds</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={bathIcon} fluid className='pe-2' />
                                        <span className='pe-2'>2 Baths</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={parkingIcon} fluid className='pe-2' />
                                        <span className='pe-2'>1 Parking</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h2>Safety and Hygiene</h2>
                            <Card className='shadow border-0'>
                                <Card.Body className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <Image src={bedIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Disinfections and Sterilizations</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={bathIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Fire Extinguishers</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={bathIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Smoke Detectors</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>Offered Amenities</h2>
                            <Card className='shadow border-0'>
                                <Card.Body className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <Image src={bedIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Wireless</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={bathIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Gym</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={parkingIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Kitchen</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={parkingIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Kitchen</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={parkingIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Kitchen</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={parkingIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Kitchen</span>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='shadow border-0'>
                                <Card.Body className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <Image src={bedIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Wireless</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={bathIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Gym</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={parkingIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Kitchen</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={parkingIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Kitchen</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src={parkingIcon} fluid className='pe-2' />
                                        <span className='pe-2'>Kitchen</span>
                                    </div>
                                    <div className='d-flex'>
                                        <Form.Select className='fst-italic fw-bold border-0'>
                                            <option >View All</option>
                                        </Form.Select>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className='slider-container py-5'>
                    <Row>
                        <div className='text-center pb-3'>
                            <h2>Browse More Properties</h2>
                        </div>
                        <Col>
                            <Slider {...settings1}>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={listingSliderImg1} fluid />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-baseline'>
                                            <Card.Title className='fs-6 fw-bold'>Highest infinity Pool in Downtown Australia</Card.Title>
                                        </div>
                                        <Card.Text>
                                            <span>Business Bay, Australia</span>
                                        </Card.Text>
                                        <div className='d-flex'>
                                            <Image src={bedIcon} fluid width={20} />
                                            <span className='px-2'>2</span>
                                            <Image src={bathIcon} fluid width={20} />
                                            <span className='px-2'>2</span>
                                            <Image src={parkingIcon} fluid width={20} />
                                            <span className='px-2'>1</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={listingSliderImg2} fluid />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-baseline'>
                                            <Card.Title className='fs-6 fw-bold'>Highest infinity Pool in Downtown Australia</Card.Title>
                                        </div>
                                        <Card.Text>
                                            <span>Business Bay, Australia</span>
                                        </Card.Text>
                                        <div className='d-flex'>
                                            <Image src={bedIcon} width={20} fluid />
                                            <span className='px-2'>2</span>
                                            <Image src={bathIcon} width={20} fluid />
                                            <span className='px-2'>2</span>
                                            <Image src={parkingIcon} width={20} fluid />
                                            <span className='px-2'>1</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={listingSliderImg3} fluid />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-baseline'>
                                            <Card.Title className='fs-6 fw-bold'>Highest infinity Pool in Downtown Australia</Card.Title>
                                        </div>
                                        <Card.Text>
                                            <span>Business Bay, Australia</span>
                                        </Card.Text>
                                        <div className='d-flex'>
                                            <Image src={bedIcon} width={20} fluid />
                                            <span className='px-2'>2</span>
                                            <Image src={bathIcon} width={20} fluid />
                                            <span className='px-2'>2</span>
                                            <Image src={parkingIcon} width={20} fluid />
                                            <span className='px-2'>1</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Slider>
                            <div className='text-center py-lg-5'>
                                <Button variant="warning" className='fw-bold rounded-5 px-4'>View All</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container >
    )
}

export default ListingDetailsPage