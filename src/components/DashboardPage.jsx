import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import personIcon from '../assets/images/personIcon.png'
import heartIcon from '../assets/images/heartIcondash.png'
import calenderIcon from '../assets/images/calender.png'
import supportIcon from '../assets/images/supportIcon.png'
import Image from 'react-bootstrap/Image';
import logoutIcon from '../assets/images/logoutIcon.png'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import editIcon from '../assets/images/editIcon.png'
import { VscSaveAs } from "react-icons/vsc";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import bedIcon from '../assets/images/bed.png'
import bathIcon from '../assets/images/bath.svg'
import parkingIcon from '../assets/images/parking.svg'
import listingSliderImg1 from '../assets/images/wishTabImg1.png'
import listingSliderImg2 from '../assets/images/wishTabImg2.png'
import listingSliderImg3 from '../assets/images/wishTabImg3.png'
import listingSliderImg4 from '../assets/images/wishTabImg4.png'
import reserveThumb from '../assets/images/reserveImg.png'

const DashboardPage = () => {

    const [editMode, setEditMode] = useState(false)
    const [nonEditMode, setNonEditMode] = useState(true)
    const [editedNameValue, setEditedNameValue] = useState("Muhammad Saad")
    const [editedPhoneValue, setEditedPhoneValue] = useState("+1 234 567 8901")

    return (
        <Container className='py-lg-5 px-4' fluid>
            <Row>
                <Col>
                    <Tabs>
                        <TabList>
                            <Nav variant="pills" defaultActiveKey="link-1" className='border border-secondary rounded-5 d-flex align-items-center justify-content-between p-2'>
                                <Tab>
                                    <Nav.Item className='text-center' style={{ width: "200px" }}>
                                        <Nav.Link eventKey="link-1" className='rounded-5' style={{ background: "linear-gradient(91.03deg, #FFD03F -9.72%, #FCC939 12.77%, #F5B82A 42.01%, #EA9C12 76.88%, #E58E06 91.5%, #DF8800 102.75%)" }} >
                                            <div>
                                                <Image src={personIcon} fluid className='pe-2' />
                                                <span className='text=black'>Personal</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>

                                </Tab>
                                <Tab>
                                    <Nav.Item className='text-center' style={{ width: "200px" }}>
                                        <Nav.Link eventKey="link-2" className='rounded-5' style={{ background: "linear-gradient(91.03deg, #FFD03F -9.72%, #FCC939 12.77%, #F5B82A 42.01%, #EA9C12 76.88%, #E58E06 91.5%, #DF8800 102.75%)" }}>
                                            <div>
                                                <Image src={heartIcon} fluid className='pe-2' />
                                                Wishlist
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Tab>
                                <Tab>
                                    <Nav.Item className='text-center' style={{ width: "200px" }}>
                                        <Nav.Link eventKey="link-3" className='rounded-5' style={{ background: "linear-gradient(91.03deg, #FFD03F -9.72%, #FCC939 12.77%, #F5B82A 42.01%, #EA9C12 76.88%, #E58E06 91.5%, #DF8800 102.75%)" }}>
                                            <div>
                                                <Image src={calenderIcon} fluid className='pe-2' />
                                            </div>
                                            Reservations
                                        </Nav.Link>
                                    </Nav.Item>
                                </Tab>
                                <Tab>
                                    <Nav.Item className='text-center' style={{ width: "200px" }}>
                                        <Nav.Link eventKey="link-4" className='rounded-5' style={{ background: "linear-gradient(91.03deg, #FFD03F -9.72%, #FCC939 12.77%, #F5B82A 42.01%, #EA9C12 76.88%, #E58E06 91.5%, #DF8800 102.75%)" }}>
                                            <div>
                                                <Image src={supportIcon} fluid className='pe-2' />
                                                Support
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Tab>
                                <Tab>
                                    <Nav.Item className='text-center' style={{ width: "200px" }}>
                                        <Nav.Link eventKey="link-5" className='rounded-5' style={{ background: "linear-gradient(91.03deg, #FFD03F -9.72%, #FCC939 12.77%, #F5B82A 42.01%, #EA9C12 76.88%, #E58E06 91.5%, #DF8800 102.75%)" }}>
                                            <div>
                                                <Image src={logoutIcon} fluid className='pe-2' />
                                                Logout
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Tab>
                            </Nav>
                        </TabList>
                        <TabPanel className="py-5">
                            {nonEditMode &&
                                <Card className='shadow border-0'>
                                    <Card.Body>
                                        <div className='border-bottom border-secondary pb-3 d-flex align-items-center justify-content-between'>
                                            <h2>Personal Information</h2>
                                            <a href="#" onClick={() => { setEditMode(true); setNonEditMode(false) }}><Image src={editIcon} fluid /></a>
                                        </div>
                                        <Row className='pt-3 border-bottom border-secondary'>
                                            <Col lg={6} >
                                                <div>
                                                    <p>Full Name</p>
                                                    <p>Phone</p>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div>
                                                    <p>{editedNameValue}</p>
                                                    <p>{editedPhoneValue}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            }
                            {editMode &&
                                <Card className='shadow border-0 p-3'>
                                    <Card.Body>
                                        <div className='border-bottom border-secondary pb-3 d-flex align-items-center justify-content-between'>
                                            <h2>Personal Information</h2>
                                            <a href="#" onClick={() => { setEditMode(false); setNonEditMode(true) }}><VscSaveAs color='black' size={26} /></a>
                                        </div>
                                        <Form>
                                            <Row className='pt-3 border-bottom border-secondary'>
                                                <Col lg={6} >
                                                    <div>
                                                        <p>Full Name</p>
                                                        <p className='pt-2'>Phone</p>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div>
                                                        <Form.Control type="text" placeholder="Your Name" className='mb-2 border-0' onChange={(e) => setEditedNameValue(e.target.value)} value={editedNameValue} />
                                                        <Form.Control type="text" placeholder="Your Phone" className='mb-2 border-0' onChange={(e) => setEditedPhoneValue(e.target.value)} value={editedPhoneValue} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            }
                        </TabPanel>
                        <TabPanel>
                            <div className='border-bottom border-secondary pb-3'>
                                <h2>
                                    My Wishlist
                                </h2>
                            </div>
                            <div className='slider-container pt-3'>
                                <Row>
                                    <Col lg={3}>
                                        <Card className='border-0 position-relative'>
                                            <Card.Img variant="top" src={listingSliderImg1} width={250} />
                                            <Card.Body>
                                                <div className='position-absolute top-0 end-0 translate-middle-x'>
                                                    <Image src={heartIcon} fluid />
                                                </div>
                                                <div className='d-flex justify-content-between align-items-baseline'>
                                                    <Card.Title className='fs-6 fw-bold'>AUD 300 / night</Card.Title>
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
                                    </Col>
                                    <Col lg={3}>
                                        <Card className='border-0 position-relative'>
                                            <Card.Img variant="top" src={listingSliderImg2} width={250} />
                                            <div className='position-absolute top-0 end-0 translate-middle-x'>
                                                <Image src={heartIcon} fluid />
                                            </div>
                                            <Card.Body>
                                                <div className='d-flex justify-content-between align-items-baseline'>
                                                    <Card.Title className='fs-6 fw-bold'>AUD 300 / night</Card.Title>
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
                                    </Col>
                                    <Col lg={3}>
                                        <Card className='border-0 position-relative'>
                                            <Card.Img variant="top" src={listingSliderImg3} width={250} />
                                            <div className='position-absolute top-0 end-0 translate-middle-x'>
                                                <Image src={heartIcon} fluid />
                                            </div>
                                            <Card.Body>
                                                <div className='d-flex justify-content-between align-items-baseline'>
                                                    <Card.Title className='fs-6 fw-bold'>AUD 300 / night</Card.Title>
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
                                    </Col>
                                    <Col lg={3}>
                                        <Card className='border-0 position-relative'>
                                            <Card.Img variant="top" src={listingSliderImg4} width={250} />
                                            <div className='position-absolute top-0 end-0 translate-middle-x'>
                                                <Image src={heartIcon} fluid />
                                            </div>
                                            <Card.Body>
                                                <div className='d-flex justify-content-between align-items-baseline'>
                                                    <Card.Title className='fs-6 fw-bold'>AUD 300 / night</Card.Title>
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
                                    </Col>
                                </Row>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <Tabs>
                                <Row>
                                    <Col lg={6}>
                                        <TabList>
                                            <Tab>Upcoming Reservations</Tab>
                                        </TabList>
                                    </Col>
                                    <Col lg={6}>
                                        <TabList>
                                            <Tab>Past Reservations</Tab>
                                        </TabList>
                                    </Col>
                                    <TabPanel>
                                        <Col lg={12}>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div></div>
                                                <div>
                                                    <p>Ref No.</p>
                                                </div>
                                                <div>
                                                    <p>Property Name</p>
                                                </div>
                                                <div>
                                                    <p>Check In</p>
                                                </div>
                                                <div>
                                                    <p>Check Out</p>
                                                </div>
                                                <div>
                                                    <p>Total Guests</p>
                                                </div>
                                                <div>
                                                    <p>Action</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <Image src={reserveThumb} fluid />
                                                </div>
                                                <div>
                                                    <p>123456</p>
                                                </div>
                                                <div>
                                                    <p>Highest infinity Pool in Downtown Australia</p>
                                                </div>
                                                <div>
                                                    <p>17 / 09 / 2024</p>
                                                </div>
                                                <div>
                                                    <p>22 / 09 / 2024</p>
                                                </div>
                                                <div>
                                                    <p>5</p>
                                                </div>
                                                <div>
                                                    <Image src={editIcon} fluid />
                                                </div>
                                            </div>
                                        </Col>
                                    </TabPanel>
                                    <TabPanel>
                                        <Col lg={12}>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div></div>
                                                <div>
                                                    <p>Ref No.</p>
                                                </div>
                                                <div>
                                                    <p>Property Name</p>
                                                </div>
                                                <div>
                                                    <p>Check In</p>
                                                </div>
                                                <div>
                                                    <p>Check Out</p>
                                                </div>
                                                <div>
                                                    <p>Total Guests</p>
                                                </div>
                                                <div>
                                                    <p>Action</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <Image src={reserveThumb} fluid />
                                                </div>
                                                <div>
                                                    <p>123456</p>
                                                </div>
                                                <div>
                                                    <p>Highest infinity Pool in Downtown Australia</p>
                                                </div>
                                                <div>
                                                    <p>17 / 09 / 2024</p>
                                                </div>
                                                <div>
                                                    <p>22 / 09 / 2024</p>
                                                </div>
                                                <div>
                                                    <p>5</p>
                                                </div>
                                                <div>
                                                    <Image src={editIcon} fluid />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div></div>
                                                <div>
                                                    <p>Ref No.</p>
                                                </div>
                                                <div>
                                                    <p>Property Name</p>
                                                </div>
                                                <div>
                                                    <p>Check In</p>
                                                </div>
                                                <div>
                                                    <p>Check Out</p>
                                                </div>
                                                <div>
                                                    <p>Total Guests</p>
                                                </div>
                                                <div>
                                                    <p>Action</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <Image src={reserveThumb} fluid />
                                                </div>
                                                <div>
                                                    <p>123456</p>
                                                </div>
                                                <div>
                                                    <p>Highest infinity Pool in Downtown Australia</p>
                                                </div>
                                                <div>
                                                    <p>17 / 09 / 2024</p>
                                                </div>
                                                <div>
                                                    <p>22 / 09 / 2024</p>
                                                </div>
                                                <div>
                                                    <p>5</p>
                                                </div>
                                                <div>
                                                    <Image src={editIcon} fluid />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div></div>
                                                <div>
                                                    <p>Ref No.</p>
                                                </div>
                                                <div>
                                                    <p>Property Name</p>
                                                </div>
                                                <div>
                                                    <p>Check In</p>
                                                </div>
                                                <div>
                                                    <p>Check Out</p>
                                                </div>
                                                <div>
                                                    <p>Total Guests</p>
                                                </div>
                                                <div>
                                                    <p>Action</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <Image src={reserveThumb} fluid />
                                                </div>
                                                <div>
                                                    <p>123456</p>
                                                </div>
                                                <div>
                                                    <p>Highest infinity Pool in Downtown Australia</p>
                                                </div>
                                                <div>
                                                    <p>17 / 09 / 2024</p>
                                                </div>
                                                <div>
                                                    <p>22 / 09 / 2024</p>
                                                </div>
                                                <div>
                                                    <p>5</p>
                                                </div>
                                                <div>
                                                    <Image src={editIcon} fluid />
                                                </div>
                                            </div>
                                        </Col>
                                    </TabPanel>
                                </Row>
                            </Tabs>
                        </TabPanel>
                    </Tabs>
                </Col>
            </Row >
        </Container >
    )
}

export default DashboardPage