import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { MdArrowRightAlt } from "react-icons/md";

const Maximize = () => {
    return (
        <div className='py-lg-5 py-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='text-center'>
                            <h2>Maximize your real estate investments,
                                request a free consultation</h2>
                        </div>
                        <div className='text-center'>
                            <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3'><MdArrowRightAlt size={28} /></Button>
                            <a href="" className='text-decoration-none text-black'><span className='ps-2'>Free Consultation</span></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Maximize