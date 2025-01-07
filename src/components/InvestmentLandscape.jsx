import React, { useState } from 'react'
import globe from '../assets/images/World1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import flipSliderImg1 from '../assets/images/flipsliderimg1.png'
import scrollBtn from '../assets/images/scrollbtn.svg'
import { StackedCarousel } from "react-stacked-carousel";
import sliderStars from '../assets/images/sliderStars.svg'
import sliderArrowRight from '../assets/images/sliderarrowright.svg'
import slidertopBtn from '../assets/images/sliderarrowtop.svg'
import sliderbottomBtn from '../assets/images/sliderarrowbottom.svg'


const InvestmentLandscape = () => {

    const [card, setCard] = useState(null);
    const onCardChange = (event) => {
        console.log("Card", event);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col className='position-relative'>
                        <div className='text-center py-5'>
                            <h2>Australia's investment landscape: Explore our success stories</h2>
                            <a href=""><Image src={scrollBtn} fluid className='mt-5' /></a>
                        </div>
                        <Image src={globe} fluid />
                        <Card className='position-absolute top-50' id='landscape-fix'>
                            <Row>
                                <Col lg={6}>
                                    <Card.Body>
                                        <Card.Title><h2>Sydney Opera House</h2></Card.Title>
                                        <Card.Text>
                                            Let’s get acquainted!
                                            <p className='pt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing.</p>
                                        </Card.Text>
                                        <div>
                                            <Row className='g-0 rounded-4' style={{ backgroundColor: "#070A0F" }}>
                                                <Col>
                                                    <div className='p-3 text-center border-end border-secondary'>
                                                        <h2 style={{ color: "#FFD03F" }}>$1,325M+</h2>
                                                        <p className='text-white-50'>Sale Value</p>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className='p-3 text-center border-secondary'>
                                                        <h2 style={{ color: "#FFD03F" }}>20%+</h2>
                                                        <p className='text-white-50'>ROI</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                    </Card.Body>
                                </Col>
                                <Col lg={6}>
                                    <div className='pt-2'>
                                        <StackedCarousel
                                            autoRotate={false}
                                            onCardChange={onCardChange}
                                            leftButton={<button style={{ border: "0", position: "absolute", top: "30%", left: "93%", background: "transparent" }}>{<Image src={slidertopBtn} fluid rounded />}</button>}
                                            rightButton={<button style={{ border: "0", position: "absolute", top: "43%", left: "93%", background: "transparent" }}>{<Image src={sliderbottomBtn} fluid rounded />}</button>} style={{ width: "100%", position: "relative" }}
                                        >
                                            <div key={"child1"} className='position-relative'>
                                                <Image src={flipSliderImg1} fluid rounded />
                                                <div className='position-absolute top-0 start-50 translate-middle-x'>
                                                    <Image src={sliderStars} fluid rounded />
                                                </div>
                                                <div className='position-absolute top-0 end-0 translate-middle-x'>
                                                    <a href=""><Image src={sliderArrowRight} fluid rounded /></a>
                                                </div>
                                            </div>
                                            <div key={"child2"} className='position-relative'>
                                                <div className='position-absolute top-0 start-50 translate-middle-x'>
                                                    <Image src={sliderStars} fluid rounded />
                                                </div>
                                                <div className='position-absolute top-0 end-0 translate-middle-x'>
                                                    <a href=""><Image src={sliderArrowRight} fluid rounded /></a>
                                                </div>
                                            </div>
                                            <div key={"child3"} className='position-relative'>
                                                <div className='position-absolute top-0 start-50 translate-middle-x'>
                                                    <Image src={sliderStars} fluid rounded />
                                                </div>
                                                <div className='position-absolute top-0 end-0 translate-middle-x'>
                                                    <a href=""><Image src={sliderArrowRight} fluid rounded /></a>
                                                </div>
                                            </div>
                                            <div key={"child4"} className='position-relative'>
                                                <div className='position-absolute top-0 start-50 translate-middle-x'>
                                                    <Image src={sliderStars} fluid rounded />
                                                </div>
                                                <div className='position-absolute top-0 end-0 translate-middle-x'>
                                                    <a href=""><Image src={sliderArrowRight} fluid rounded /></a>
                                                </div>
                                            </div>
                                        </StackedCarousel>

                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default InvestmentLandscape