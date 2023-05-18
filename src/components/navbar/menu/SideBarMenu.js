import React ,{useContext} from 'react'
import {TfiClose} from 'react-icons/tfi'
import NavItem from '../NavItem'
import { Navitem2 } from '../Navitem2'
import {AiTwotoneHome} from 'react-icons/ai'
import {IoIosPerson} from 'react-icons/io'
import {IoGitNetwork} from 'react-icons/io5'
import {IoCallSharp} from 'react-icons/io5'
import {HiOutlineSun} from 'react-icons/hi'
import { CiDark } from 'react-icons/ci'


export const SideBarMenu = ({setSideBarMenu ,darkMode , setDarkMode}) => {
  return (
    <div className={`z-20 h-[450px]  bg-[#131076] md:hidden  w-[240px] absolute  right-0 top-16
      rounded-bl-[22px]
      p-5
    `}>
        <div className='flex items-center justify-between px-2'>
                  <div  onClick={() => setSideBarMenu(false)}>
                    <TfiClose className= 'text-white text-[24px] cursor-pointer'/>
                  </div> 
                  <div  className='cursor-pointer flex   '
                          onClick={() =>setDarkMode((preVal) => !preVal)}
                  
                  >
                        { darkMode ?
                        <CiDark  className=' text-white text-[28px]'/> 
                            :
                         <HiOutlineSun  className=' text-white text-[28px]'/>
                         }
                  </div>
        </div>
      <div className='bg-primary px-4 py2 mt-4 rounded-2xl h-[370px] flex
       flex-col justify-evenly
      '>
          <NavItem name='Home' Icon={AiTwotoneHome}/>
           <NavItem name='About' Icon={IoIosPerson}/>
         <Navitem2 name='Projects' Icon={IoGitNetwork} />
           <Navitem2 name='Contact' Icon={IoCallSharp} />
            
      </div>

    </div>
  )
}
