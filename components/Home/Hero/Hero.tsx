import { BaseInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa'








const Hero = () => {
  return (
        <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative '>
            <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>

            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
            {/* { text content} */}
                <div >
                    {/* {Nome apresentação } */}
                    <h1 className='text-2x1 md:text-3xl lg:text-4xl mb-3 text-gray-300 font-semibold '>Olá, Sou {BaseInfo.name} </h1>
                {/* { Informação base} */}
                    <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white '>{BaseInfo.position}</h1>
                {/* { descrição perfil} */}
                    <p className='text-white mt-6 text-sm md:text-base text-opacity-70 '>{BaseInfo.description } </p>

                    <button className=' md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center
                    space-x-2'>
                        <span>Download CV</span>
                        <FaDownload/>   
                    </button>
                </div>
            {/*{ image contet} */}
            <div className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden'>
                <Image src={BaseInfo.profilePic} width={500} height={500} alt='imagem profile total'/>
            </div>
            </div>
            </div>
        </div>
  )
}

export default Hero