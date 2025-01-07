import React from 'react'
import Image from 'react-bootstrap/Image';
import worldMap from '../assets/images/world_mapbg.png'
import Button from 'react-bootstrap/Button';
import { MdArrowRightAlt } from "react-icons/md";

const AffordableCities = () => {
    return (
        <div className='position-relative py-lg-5 my-lg-5 py-3 my-3 worldmapicons'>
            <Image src={worldMap} fluid />
            <div className='position-absolute top-50 start-50 translate-middle text-center affordtext' id='affordtext'>
                <h2>Australia – one of the most affordable cities globally for real estate investment</h2>
            </div>
            <div className='text-center mt-lg-0 mt-5'>
                <Button variant="light" className='bg-transparent border-secondary rounded-5 px-3'><MdArrowRightAlt size={28} /></Button>
                <a href="" className='text-decoration-none text-black'><span className='ps-2'>Free Consultation</span></a>
            </div>
        </div>
    )
}

export default AffordableCities