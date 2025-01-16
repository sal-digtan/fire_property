import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import Image from 'react-bootstrap/Image';
import previewSliderImg from '../assets/images/previewSlider.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import previewThumb1 from '../assets/images/previewSliderThumb1.png'
import previewThumb2 from '../assets/images/previewSliderThumb2.png'
import previewThumb3 from '../assets/images/previewSliderThumb3.png'
import previewThumb4 from '../assets/images/previewSliderThumb4.png'
import previewThumb5 from '../assets/images/previewSliderThumb5.png'
import previewThumb6 from '../assets/images/previewSliderThumb6.png'

const PreviewPage = () => {

    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Container className='py-lg-5'>
            <Row>
                <Col lg={5}>
                    <Slider {...settings}>
                        <div>
                            <Image src={previewSliderImg} fluid />
                        </div>
                        <div>
                            <Image src={previewSliderImg} fluid />
                        </div>
                        <div>
                            <Image src={previewSliderImg} fluid />
                        </div>
                    </Slider>
                    <div className='d-flex'>
                        <div className='me-2'>
                            <Image src={previewThumb1} fluid />
                        </div>
                        <div className='me-2'>
                            <Image src={previewThumb2} fluid />
                        </div>
                        <div className='me-2'>
                            <Image src={previewThumb3} fluid />
                        </div>
                        <div className='me-2'>
                            <Image src={previewThumb4} fluid />
                        </div>
                        <div className='me-2'>
                            <Image src={previewThumb5} fluid />
                        </div>
                        <div className='me-2'>
                            <Image src={previewThumb6} fluid />
                        </div>
                    </div>
                </Col>
                <Col lg={7}>
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
                                    <p>Booking Amount <span className='d-block'>Charges Including VAT and others</span></p>
                                    <p className='fw-bold'>AUD 3,491.00</p>
                                </div>
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
                                <div className='py-4'>
                                    <Button variant="warning" className='w-100 fw-bold rounded-5' style={{
                                        background: "linear-gradient(91.03deg, #FFD03F -9.72%, #FCC939 12.77%, #F5B82A 42.01%, #EA9C12 76.88%, #E58E06 91.5%, #DF8800 102.75%)"
                                    }}>Continue</Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PreviewPage