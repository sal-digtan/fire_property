import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import partnerLogo1 from '../assets/images/partner1.png'
import partnerLogo2 from '../assets/images/partner2.png'
import partnerLogo3 from '../assets/images/partner3.png'
import partnerLogo4 from '../assets/images/partner4.png'
import partnerLogo5 from '../assets/images/partner5.png'
import partnerLogo6 from '../assets/images/partner6.png'

const PartFireGroup = () => {
    return (
        <div>
            <Container className='py-5'>
                <Row>
                    <Col>
                        <div className='d-flex align-items-center justify-content-center'>
                            <Image src={partnerLogo1} fluid className='pe-5' />
                            <h2>Part of The
                                <span className='d-block'>Fire Property Group</span></h2>
                        </div>
                        <div className='d-flex my-5 p-5'>
                            <div className='p-3'>
                                <Image src={partnerLogo2} fluid className='pe-5' />
                            </div>
                            <div className='p-3'>
                                <Image src={partnerLogo3} fluid className='pe-5' />
                            </div>
                            <div className='p-3'>
                                <Image src={partnerLogo4} fluid className='pe-5' />
                            </div>
                            <div className='p-3'>
                                <Image src={partnerLogo1} fluid className='pe-5' />
                            </div>
                            <div className='p-3'>
                                <Image src={partnerLogo5} fluid className='pe-5' />
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center my-5'>
                            <div className='p-3'>
                                <Image src={partnerLogo6} fluid className='pe-5' />
                            </div>
                            <div className='p-3'>
                                <Image src={partnerLogo2} fluid className='pe-5' />
                            </div>
                            <div className='p-3'>
                                <Image src={partnerLogo3} fluid className='pe-5' />
                            </div>
                            <div className='p-3'>
                                <Image src={partnerLogo4} fluid className='pe-5' />
                            </div>
                            <div className='p-3'>
                                <Image src={partnerLogo1} fluid className='pe-5' />
                            </div>
                        </div>
                        <div className='d-flex align-items-end justify-content-end my-5'>
                            <div className='p-3'>
                                <Image src={partnerLogo5} fluid className='pe-5' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PartFireGroup