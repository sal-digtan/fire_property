import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import journeyArrow from '../assets/images/journeyArrow.svg'
import Image from 'react-bootstrap/Image';
import journeyImg1 from '../assets/images/journeyimg1.png'
import journeyImg2 from '../assets/images/journeyimg2.png'
import journeyImg3 from '../assets/images/journeyimg3.png'
import journeyImg4 from '../assets/images/journeyimg4.png'
import journeyImg5 from '../assets/images/journeyimg5.png'
import journeyImg6 from '../assets/images/journeyimg6.png'
import journeyImg7 from '../assets/images/journeyimg7.png'


const Journey = () => {

    const journeyTimeline = [
        {
            id: "1",
            img: journeyImg1,
            year: "2018",
            heading: "FPG launches",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "2",
            img: journeyImg2,
            year: "2019",
            heading: "Portfolio doubles",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "3",
            img: journeyImg3,
            year: "2020",
            heading: "Pandemic response",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "4",
            img: journeyImg4,
            year: "2021",
            heading: "Interiors",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "5",
            img: journeyImg5,
            year: "2022",
            heading: "Operational expansion",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "6",
            img: journeyImg6,
            year: "2023",
            heading: "New Launches",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "7",
            img: journeyImg7,
            year: "2024",
            heading: "Award-winning",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]

    return (
        <Container>
            <Row>
                <Col>
                    <div className='text-center'>
                        <h2 className='text-capitalize'>Our journey through time</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
                        <div className='text-center'>
                            <Image src={journeyArrow} fluid />
                        </div>
                    </div>
                    <Row className='d-flex flex-column'>
                        {journeyTimeline.map((item, index) =>
                            <Col key={index} className='d-flex flex-row align-items-start justify-content-start'>
                                <Image src={item.id === "1" ? journeyImg1 : item.id === "2" ? journeyImg2 : item.id === "3" ? journeyImg3 : item.id === "4" ? journeyImg4 : item.id === "5" ? journeyImg5 : item.id === "6" ? journeyImg6 : item.id === "7" ? journeyImg7 : ""} fluid rounded />
                                <div className='d-flex mx-5 align-items-start justify-content-start flex-column'>
                                    <div>
                                        <h2 style={{ color: "#FFD03F" }} >{item.year}</h2>
                                    </div>
                                    <div className='d-flex flex-row align-items-start justify-content-start'>
                                        <h2 className='pe-5 w-100'>{item.heading}</h2>
                                        <p className='w-100'>{item.text}</p>
                                    </div>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Journey