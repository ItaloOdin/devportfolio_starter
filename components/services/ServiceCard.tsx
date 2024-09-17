"use client"
import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt'

type props = {
    service: {
        id: Number;
        title: String;
        description: String;
        icon: String;
    };
}


const ServiceCard = ( {service}:props ) => {
    
  return (
    <Tilt className='shadow-2xl p-6 rounded-lg bg-[#814ced] '>
        <Image>/
    </Tilt>
  )
}

export default ServiceCard