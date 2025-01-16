import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import logo from '../assets/images/footerLogo.png'
import footIcon1 from '../assets/images/ftricon1.svg'
import footIcon2 from '../assets/images/ftricon2.svg'
import footIcon3 from '../assets/images/ftricon3.svg'

const Footer = () => {
    return (
        <div>
            <Container fluid className='px-5'>
                <Row style={{ backgroundColor: "#070A0F" }} className='p-5 rounded-3 align-items-center'>
                    <Col lg={2}>
                        <Image src={logo} fluid />
                    </Col>
                    <Col lg={2}>
                        <ul className='list-unstyled text-white-50'>
                            <p>Quick Links</p>
                            <li>Short Let </li>
                            <li>
                                About
                            </li>
                            <li>
                                Listings
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <ul className='list-unstyled text-white-50'>
                            <p>Legal</p>
                            <li>Terms and Conditions </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                FAQs
                            </li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <ul className='list-unstyled text-white-50'>
                            <p>Invest with us</p>
                            <li>Investment Opportunity</li>
                            <li>
                                Global Investors
                            </li>
                            <li>
                                Investor Form
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <ul className='list-unstyled text-white-50'>
                            <p>Contact</p>
                            <li><Image src={footIcon1} fluid className='pe-2 mb-2' /> Australia</li>
                            <li>
                                <li><Image src={footIcon2} fluid className='pe-2 mb-2' />info@company.com</li>
                            </li>
                            <li>
                                <li><Image src={footIcon3} fluid className='pe-2 mb-2' />+1 234 567 8901</li>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer