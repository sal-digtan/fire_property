import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GrMap } from "react-icons/gr";
import Form from 'react-bootstrap/Form';
import { IoBedOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';

const SearchBox = () => {
    return (
        <div className='py-lg-5'>
            <Container>
                <Row className='border border-secondary align-items-center p-3' id='border-fix' style={{ borderRadius: "100px" }}>
                    <Col lg={5}>
                        <span className='d-block mb-lg-0'>The Short-Let Rental Calculator</span>
                        <span className='text-capitalize mb-lg-0 mb-md-3 mb-3' style={{ color: "#AAAEBA", fontSize: "14px" }}>How much you could make on australia's short-let market? </span>
                    </Col>
                    <Col lg={3}>
                        <div className='d-flex mt-lg-0 mt-md-3 mt-3'>
                            <span className='border border-black rounded-circle p-2'>
                                <GrMap />
                            </span>
                            <Form.Control type="text" placeholder="Start Typing Address" className='border-0' />
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className='d-flex mt-lg-0 mt-md-3 mt-3'>
                            <span className='border border-black rounded-circle p-2'>
                                <IoBedOutline />
                            </span>
                            <Form.Select className='border-0'>
                                <option>No. of Beds</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col className='text-end mt-lg-0 mt-md-3 mt-3' lg={2}>
                        <Button variant="warning" className='listingbtn' style={{ backgroundColor: "#FFD03F", borderRadius: "46px" }}>Search</Button>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default SearchBox