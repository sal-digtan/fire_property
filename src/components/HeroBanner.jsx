import React from 'react'
import roomInterior from '../assets/images/room-interior.jpg'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import roomInterior1 from '../assets/images/room-interior1.jpg'
import heroBgvideo from '../assets/images/herobgvideo.mp4'

const HeroBanner = () => {
    return (
        <div>
            <Container>
                <video width="auto" height="auto" autoPlay muted loop className='rounded-5 img-fluid'>
                    <source src={heroBgvideo} type="video/mp4" />
                </video>
            </Container>
        </div>
    )
}

export default HeroBanner