import React from 'react'
import NavBarComp from './NavBarComp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import scrollBtn from '../assets/images/scrollbtn.svg'
import Image from 'react-bootstrap/Image';
import videoBg from '../assets/images/aboutvideobg.png'
import playIcon from '../assets/images/PlayIcon.svg'


const AboutPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <NavBarComp />
                    </Col>
                    <Col lg={12}>
                        <div className='py-5 text-center'>
                            <h2>
                                Our journey:
                                The Fire Property Group story
                            </h2>
                            <a href=""><Image src={scrollBtn} fluid className='mt-5' /></a>
                        </div>
                    </Col>
                    <Col lg={12} className='position-relative'>
                        <Image src={videoBg} fluid />
                        <div className='position-absolute top-50 start-50 translate-middle'>
                            <a href=""><Image src={playIcon} fluid /></a>
                        </div>
                    </Col>

                </Row>
            </Container>
   
        </div>
    )
}

export default AboutPage