import React , {useContext} from 'react'
import Logo from './Logo'
import NavItem from './NavItem'
import {AiTwotoneHome} from 'react-icons/ai'
import {IoIosPerson} from 'react-icons/io'
import {IoGitNetwork} from 'react-icons/io5'
import {IoCallSharp} from 'react-icons/io5'
import {HiOutlineSun} from 'react-icons/hi'
import { CiDark } from 'react-icons/ci'
import {CiMenuBurger, CiMenuFries} from 'react-icons/ci'
import { Navitem2 } from './Navitem2'
import { ProfileContext, useProfile } from '../../Context/AppContextProvider'
const Navbar = () => {
    const {darkMode , sideBarMenu ,setSideBarMenu,setDarkMode } = useProfile()
  return (
    <nav className={`max-w-[1240px]  md:h-24 h-16  ${darkMode ? 'bg-[#3943b3]': ' bg-[#333188]' } w-[100%]  rounded-[14px]
    flex  justify-between items-center 
    md:px-8 xl:mt-10
    px-4 mt-[2px]`}
    >
          <Logo />
          <ul className=' hidden md:h-12 w-[36rem] md:mr-12  
                         md:flex items-center justify-center gap-4 '>
           
                    <p className='  cursor-pointer  xl:px-[1.5rem] xl:py-[0.5rem] hover:bg-[#cad7fd]
                    text-white   hover:text-[#333188] text-[16px]  md:text-[18px] font-bold tracking-[3px] 
                      rounded-[7px]
                      '>Home
                    </p>
                    <p className='  cursor-pointer  xl:px-[1.5rem] xl:py-[0.5rem] hover:bg-[#cad7fd]
                    text-white   hover:text-[#333188] text-[16px]  md:text-[18px] font-bold tracking-[3px] 
                      rounded-[7px]
                      '>About
                    </p> <p className='  cursor-pointer  xl:px-[1.5rem] xl:py-[0.5rem] hover:bg-[#cad7fd]
                    text-white   hover:text-[#333188] text-[16px]  md:text-[18px] font-bold tracking-[3px] 
                      rounded-[7px]
                      '>Project
                    </p> <p className='  cursor-pointer  xl:px-[1.5rem] xl:py-[0.5rem] hover:bg-[#cad7fd]
                    text-white   hover:text-[#333188] text-[16px]  md:text-[18px] font-bold tracking-[3px] 
                      rounded-[7px]
                      '>Contact
                    </p>
          </ul>
          <div className=' h-10 w-[2rem] md:h-16 md:w-[6rem] flex  items-center'>
                  <div  className='
                          cursor-pointer hidden md:flex   '
                          onClick={() =>setDarkMode((preVal) => !preVal)}
                          >
                              {
                              darkMode ?
                        <HiOutlineSun  className=' text-white text-[28px]'/>
                        :
                        <CiDark  className=' text-white text-[28px]'/>
                        }
                  </div>
                  <div onClick={() => setSideBarMenu(true)}> 
                  {sideBarMenu 
                  ? 
                  <CiMenuFries className=' block md:hidden text-white text-[26px]' />
                   :
                    <CiMenuBurger  className=' block md:hidden text-white text-[26px]'/>
                  }
                    </div>

          </div>
    </nav>
   
  )
}

export default Navbar