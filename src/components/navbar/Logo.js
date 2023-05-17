import React from 'react'
import {MdWorkspacesOutline } from 'react-icons/md'
const Logo = () => {
  return (
    <div className=' h-12 md:h-16 lg:w-44 flex justify-between items-center'>
          <div className=' w-[2.8rem] md:w-[3.2rem] h-[44px] relative'>
            <div className=" w-3 h-3 md:w-4 md:h-4 border-[2px] border-purple-100 rounded-full bg-secondary  absolute top-[0.3rem]  md:top-[0]"></div> 
            <div className=" w-3 h-3 md:w-4 md:h-4 border-[2px] border-purple-100 rounded-full bg-secondary absolute top-[0.9rem] left-[16px] md:left-[20px]"></div>
            <div className=" w-3 h-3 md:w-4 md:h-4 border-[2px] border-purple-100 rounded-full bg-secondary absolute bottom-2 md:bottom-0"></div>
          </div>
        <p className="font-1 text-purple-200 text-[18px] md:text-[28px] tracking-[3px] md:tracking-[5px]">Faheem</p>

</div>
  )
}

export default Logo