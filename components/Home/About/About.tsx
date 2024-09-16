import SectionHeading from '@/components/Helper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaCheck, FaIcons } from 'react-icons/fa'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        {/* {section head} */}
        <SectionHeading>Sobre Mim</SectionHeading>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
       {/* {text content} */}
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200"> 
            {aboutInfo.title}
          </h1>
        <div>
        {/* { stats content } */}
          <p className='mt-6 text-base text-gray-500'>
             {aboutInfo.description}
          </p>
          <div className='mt-8'>
          <div className='flex items-center space-x-2 mb-3'>
            <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
                <FaCheck className='text-white '/>
            </div>
            <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Frontend development</p>
          </div>
          </div>
          <div className='mt-1'>
          <div className='flex items-center space-x-2 '>
            <div className='w-7 h-7 bg-red-800 flex flex-col items-center justify-center'>
                <FaCheck className='text-white '/>
            </div>
            <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>FullStack Development</p>
          </div>
          </div>
          </div>
          </div>

          <div className=' grid grid-cols-2 gap-16 items-center lg:mx-auto'>
          <div>
            <Image src="/images/customer.png" alt='image' width={80} height={80} className='mx-auto'/>
             </div>
            </div>
        </div>
    </div>

  )
}

export default About