import React from 'react'
import {MdWorkspacesOutline } from 'react-icons/md'
const Logo = () => {
  return (
    <div className='  md:h-16 lg:w-44 flex justify-between items-center'>
          <div className='w-[3.2rem] h-[44px] relative'>
            <div className=" w-4 h-4 border-[2px] border-purple-100 rounded-full bg-secondary"></div> 
            <div className=" w-4 h-4 border-[2px] border-purple-100 rounded-full bg-secondary absolute top-[0.9rem] left-[20px]"></div>
            <div className=" w-4 h-4 border-[2px] border-purple-100 rounded-full bg-secondary absolute bottom-0"></div>
          </div>
        <p className="font-1 text-purple-200 text-[28px] tracking-[5px]">Faheem</p>

</div>
  )
}

export default Logo