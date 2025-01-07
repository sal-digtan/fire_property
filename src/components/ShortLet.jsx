import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import shortLetGraph from '../assets/images/shortletGraph.png'
import Button from 'react-bootstrap/Button';
import { MdArrowRightAlt } from "react-icons/md";

const ShortLet = () => {
  return (
    <div className='py-lg-5 my-lg-5 py-4'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={5}>
            <div>
              <h2>Why
                short-term let?</h2>
              <p className='mb-lg-5 pb-lg-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='mb-5 mb-lg-0'>
              <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3'><MdArrowRightAlt size={28} /></Button>
              <a href="" className='text-decoration-none text-black'><span className='ps-2'>Free Consultation</span></a>
            </div>
          </Col>
          <Col lg={7}>
            <div>
              <Image src={shortLetGraph} fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ShortLet