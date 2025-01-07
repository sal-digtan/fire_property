import React from 'react'
import Container from 'react-bootstrap/Container';
import { FaArrowCircleDown } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import testPerson from '../assets/images/test-person.jpg'
import { IoMdStar } from "react-icons/io";
import testPerson1 from '../assets/images/test-person1.png'
import Slider from "react-slick";

const MultiplyInvestments = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='py-lg-5 py-3'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className='position-relative mb-lg-0 mb-4' >
                            <h2 className='me-2'>Multily your Investments Through Real Estate Opportunities</h2>
                            <div className='position-absolute top-50 end-50 translate-middle-x arrow-fix'>
                                <FaArrowCircleDown size={35} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} >
                        <div className="slider-container">
                            <Slider {...settings}>

                                <div className='d-flex align-items-start flex-column' >
                                    <span style={{ backgroundColor: "#E6E6E6", borderRadius: "25px" }} className='d-flex' >
                                        <Image src={testPerson1} roundedCircle width={27} height={27} />
                                        <span className='ps-2'>TOP TESTIMONIAL</span>
                                    </span>

                                    <p>Incredible Experience with FPG!
                                        Their experience and dedication made finding my perfect...
                                    </p>
                                    <span className='d-block'>
                                        <span className='d-flex'>
                                            <IoMdStar />
                                            4.8
                                        </span>

                                    </span>
                                </div>
                                <div className='d-flex align-items-start flex-column' >
                                    <span style={{ backgroundColor: "#E6E6E6", borderRadius: "25px" }} className='d-flex' >
                                        <Image src={testPerson1} roundedCircle width={27} height={27} />
                                        <span className='ps-2'>TOP TESTIMONIAL</span>
                                    </span>

                                    <p>Incredible Experience with FPG!
                                        Their experience and dedication made finding my perfect...
                                    </p>
                                    <span className='d-block'>
                                        <span className='d-flex'>
                                            <IoMdStar />
                                            4.8
                                        </span>

                                    </span>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MultiplyInvestments