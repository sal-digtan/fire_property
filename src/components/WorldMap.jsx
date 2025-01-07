import React from 'react'
import Image from 'react-bootstrap/Image';
import worldMap from '../assets/images/animated-map.png'
import Container from 'react-bootstrap/Container';
import { MdOutlineAirplanemodeActive } from "react-icons/md";

const WorldMap = () => {
    return (
        <div>
            <Container fluid>
                <Image src={worldMap} fluid />
                <MdOutlineAirplanemodeActive />
            </Container>
        </div>
    )
}

export default WorldMap