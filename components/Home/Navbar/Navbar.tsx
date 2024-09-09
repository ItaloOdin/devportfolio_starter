import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'


type Props = {
    openNav: () => void
}


const Navbar = ({openNav}: Props) => {
  return (
    <div className='fixed h-[12vh] z-[10] bg-blue-950 w-full'>
    <div  className='flex item-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto '>
        {/* Logo */}
        <Image src="/images/logo.png" 
        alt='logo imagem' 
        width={170} 
        height={170} 
        className='ml-[-1.5rem] sm:ml-0'/>  
            {/* {Links} */} 
            
            <div className='flex item-center space-x-10'>
            <div className='hidden lg:flex space-x-10'>
            
            {navLinks.map((navlink)=> {
                return (
                    <Link key={navlink.id} href={navlink.url}>
                       <p className='nav__link'> {navlink.label}</p> 
                    </Link>
                )
            })}
</div>
            {/* {Buttons} */}
            <div className=' flex items-center space-x-4'>
                <button className='md:px10 :py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base bg-white hover:bg-gray-200 transition-all
                         duration-200 rounded-lg'> Contrate</button>

                         <HiBars3BottomLeft 
                         
                         onClick={openNav} 
                         className='w-8 h-8 cursor-pointer text-white lg:hidden '/>
            </div>                
               </div>
                 </div>
                    </div>
        
  )
}

export default Navbar
