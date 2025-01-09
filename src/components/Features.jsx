import React from 'react'
import twitterIcon from '../assets/images/Twitter.svg'
import fbIcon from '../assets/images/Facebook.svg'
import linkedinIcon from '../assets/images/LinkedIn.svg'
import instaIcon from '../assets/images/Instagram.svg'
import james from '../assets/images/james.png'
import checkIcon from '../assets/images/checkicon.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Features = () => {
    return (
        <div>
            <Container fluid className='py-5'>
                <Row>
                    <Col style={{ backgroundColor: "#070A0F" }}>
                        <Row className='p-3'>
                            <Col lg={4}>
                                <h2 className='text-white-50'>Hello, I’m James. 👋</h2>
                                <span className='text-white-50'>The Founder & Director of Fire Property Group</span>
                                <p className='text-white-50'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div>
                                    <a href="" className='pe-2'>
                                        <Image src={twitterIcon} fluid />
                                    </a>
                                    <a href="" className='pe-2'>
                                        <Image src={fbIcon} fluid />
                                    </a>
                                    <a href="" className='pe-2'>
                                        <Image src={linkedinIcon} fluid />
                                    </a>
                                    <a href="" className='pe-2'>
                                        <Image src={instaIcon} fluid />
                                    </a>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <Image src={james} fluid />
                            </Col>
                            <Col lg={4}>
                                <div>
                                    <h2 className='text-white-50'>What makes us
                                        stand out?</h2>
                                    <ul className='list-unstyled text-white'>
                                        <li className='mb-3 p-3' style={{ backgroundColor: "#43495B", borderRadius: "45px" }}><Image src={checkIcon} fluid /> British standards of professionalism</li>
                                        <li className='mb-3 p-3' style={{ backgroundColor: "#43495B", borderRadius: "45px" }}><Image src={checkIcon} fluid /> Duty of care to clients</li>
                                        <li className='mb-3 p-3' style={{ backgroundColor: "#43495B", borderRadius: "45px" }}><Image src={checkIcon} fluid /> High-quality services across all areas</li>
                                        <li className='mb-3 p-3' style={{ backgroundColor: "#43495B", borderRadius: "45px" }}><Image src={checkIcon} fluid /> Approachability & transparency</li>
                                        <li className='mb-3 p-3' style={{ backgroundColor: "#43495B", borderRadius: "45px" }}><Image src={checkIcon} fluid /> Invested in your success</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Features