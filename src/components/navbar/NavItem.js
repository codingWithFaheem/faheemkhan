import React from 'react'

const NavItem = ({name , Icon}) => {
  return (
    <div className={`  hidden 
      md:w-[7.5rem] md:h-full px-2
        rounded-[12px]
        cursor-pointer
         bg-gradient-to-r from-[#4c1ce7] to-[#8978e0]
    md:flex justify-center items-center gap-x-2 `}>
        <Icon className={` text-white text-[24px]`}/>
        <p className=' text-purple-200 text-[18px] font-bold tracking-[3px]'>{name}</p>
    </div>
  )
}

export default NavItem