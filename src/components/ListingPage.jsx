import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import listingSliderImg from '../assets/images/listingtopsliderimg.png'
import Image from 'react-bootstrap/Image';
import shareIcon from '../assets/images/shareicon.png'
import markerIcon from '../assets/images/markerIcon.png'
import bedIcon from '../assets/images/bed.png'
import bathIcon from '../assets/images/bath.svg'
import parkingIcon from '../assets/images/parking.svg'
import { GrMap } from "react-icons/gr";
import Form from 'react-bootstrap/Form';
import { IoBedOutline } from "react-icons/io5";
import calenderIcon from '../assets/images/calender.svg'
import guestIcon from '../assets/images/guest.svg'
import listingSliderImg1 from '../assets/images/listingsliderimg1.png'
import listingSliderImg2 from '../assets/images/listingsliderimg2.png'
import listingSliderImg3 from '../assets/images/listingsliderimg3.png'
import heartIcon from '../assets/images/hearticon.png'


const ListingPage = () => {

    const containerStyle = {
        width: '660px',
        height: '600px',
    }

    const center = {
        lat: -3.745,
        lng: -38.523,
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAE2--tQUoOoXWbppw3rpPM9MXxC_TrNs0',
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    var settings1 = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return isLoaded ? (
        <div id='listing-page'>
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
            <Container fluid className='px-4'>
                <Row>
                    <Col lg={6}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                        >
                            {/* Child components, such as markers, info windows, etc. */}
                            <></>
                        </GoogleMap>
                    </Col>
                    <Col lg={6}>
                        <Slider {...settings}>
                            <Card className='border-0 shadow-lg'>
                                <Card.Body>
                                    <div className='d-flex'>
                                        <Image src={listingSliderImg} fluid className='rounded-5' />
                                        <div className='ps-3'>
                                            <div className='d-flex justify-content-between'>
                                                <p>Most popular</p>
                                                <p className='d-flex'>Share<span><Image src={shareIcon} fluid className='ps-2' /></span></p>
                                            </div>
                                            <Card.Title>Cosy apartment for rent</Card.Title>
                                            <p className='d-flex'><span><Image src={markerIcon} fluid className='pe-2' /></span>411 University St, Seattle, Australia</p>
                                            <p className='d-flex rounded-5 p-2' style={{ backgroundColor: "#EEEFEF", fontSize: "14px" }}>
                                                <span className='pe-1'><Image src={bedIcon} fluid className='ps-2' /></span>2 Beds
                                                <span className='pe-1'><Image src={bathIcon} fluid className='ps-2' /></span>2 Baths
                                                <span className='pe-1'><Image src={parkingIcon} fluid className='ps-2' /></span>1 Parking
                                            </p>
                                            <Card.Text className='mb-5'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                                            </Card.Text>
                                            <span>Rental Price: <span className='fw-bold fs-5'>AUD 300 / night</span></span>
                                            <Button variant="warning" className='w-100 rounded-5 mt-5 fw-bold'>Book Now</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='border-0 shadow-lg'>
                                <Card.Body>
                                    <div className='d-flex'>
                                        <Image src={listingSliderImg} fluid className='rounded-5' />
                                        <div className='ps-3'>
                                            <div className='d-flex justify-content-between'>
                                                <p>Most popular</p>
                                                <p className='d-flex'>Share<span><Image src={shareIcon} fluid className='ps-2' /></span></p>
                                            </div>
                                            <Card.Title>Cosy apartment for rent</Card.Title>
                                            <p className='d-flex'><span><Image src={markerIcon} fluid className='pe-2' /></span>411 University St, Seattle, Australia</p>
                                            <p className='d-flex rounded-5 p-2' style={{ backgroundColor: "#EEEFEF", fontSize: "14px" }}>
                                                <span className='pe-1'><Image src={bedIcon} fluid className='ps-2' /></span>2 Beds
                                                <span className='pe-1'><Image src={bathIcon} fluid className='ps-2' /></span>2 Baths
                                                <span className='pe-1'><Image src={parkingIcon} fluid className='ps-2' /></span>1 Parking
                                            </p>
                                            <Card.Text className='mb-5'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                                            </Card.Text>
                                            <span>Rental Price: <span className='fw-bold fs-5'>AUD 300 / night</span></span>
                                            <Button variant="warning" className='w-100 rounded-5 mt-5 fw-bold'>Book Now</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Slider>
                        <div className='slider-container py-5'>
                            <Row>
                                <Col>
                                    <Slider {...settings1}>
                                        <Card className='rounded-5'>
                                            <Card.Img variant="top" src={listingSliderImg1} width={250} />
                                            <Card.Body>
                                                <div className='d-flex justify-content-between align-items-baseline'>
                                                    <Card.Title className='fs-6 fw-bold'>AUD 300 / night</Card.Title>
                                                    <Image src={heartIcon} fluid />
                                                </div>
                                                <Card.Text>
                                                    411 University St, Seattle
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
                                        <Card className='rounded-5'>
                                            <Card.Img variant="top" src={listingSliderImg2} width={250} />
                                            <Card.Body>
                                                <div className='d-flex justify-content-between align-items-baseline'>
                                                    <Card.Title className='fs-6 fw-bold'>AUD 300 / night</Card.Title>
                                                    <Image src={heartIcon} fluid />
                                                </div>
                                                <Card.Text>
                                                    411 University St, Seattle
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
                                        <Card className='rounded-5'>
                                            <Card.Img variant="top" src={listingSliderImg1} width={250} />
                                            <Card.Body>
                                                <div className='d-flex justify-content-between align-items-baseline'>
                                                    <Card.Title className='fs-6 fw-bold'>AUD 300 / night</Card.Title>
                                                    <Image src={heartIcon} fluid />
                                                </div>
                                                <Card.Text>
                                                    411 University St, Seattle
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
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    ) : (
        <></>
    )
}

export default ListingPage