import React from 'react'
import Logo from './Logo'
import NavItem from './NavItem'
import {AiTwotoneHome} from 'react-icons/ai'
import {IoIosPerson} from 'react-icons/io'
import {IoGitNetwork} from 'react-icons/io5'
import {IoCallSharp} from 'react-icons/io5'
import {HiOutlineSun} from 'react-icons/hi'
import { Navitem2 } from './Navitem2'
const Navbar = () => {
  return (
    <nav className='max-w-[1240px]  md:h-24 h-16  bg-[#0f0d4e] w-[100%] mt-10 rounded-[14px]
    flex  justify-between items-center 
    px-8
    '>
          <Logo />
          <ul className=' hidden md:h-12 w-[36rem] md:mr-12  
                         md:flex items-center justify-center gap-4 '>
                <NavItem name='Home' Icon={AiTwotoneHome}/>
                <NavItem name='About' Icon={IoIosPerson}/>
                <Navitem2 name='Projects' Icon={IoGitNetwork} />
                <Navitem2 name='Contact' Icon={IoCallSharp} />
          </ul>
          <div className=' md:h-16 md:w-[6rem] flex  items-center'>
                  <div  className='
         cursor-pointer
         '>
                        <HiOutlineSun  className=' text-white text-[28px]'/>
                  </div>
          </div>
    </nav>
  )
}

export default Navbar