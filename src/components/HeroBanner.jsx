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
                <video autoPlay muted loop className='home-videobg img-fluid rounded-5'>
                    <source src={heroBgvideo} type="video/mp4" />
                </video>
            </Container>
        </div>
    )
}

export default HeroBanner