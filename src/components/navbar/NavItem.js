import React from 'react'
const NavItem = ({name , Icon , darkMode}) => {
  return (
    <div className={`  
      md:w-[7.5rem] h-[60px] md:h-full px-8 md:px-2
        rounded-[12px]
        cursor-pointer
         
         hover:${darkMode ? 'bg-[#185f85]' : 'bg-gradient-to-r from-[#4c1ce7] to-[#8978e0]'}
    flex justify-between md:justify-center items-center gap-x-3 md:gap-x-2 `}>
        <Icon className={` text-white  text-[20px] md:text-[24px]`}/>
        <p className=' text-purple-200 text-[16px]  md:text-[18px] font-bold tracking-[3px]'>{name}</p>
    </div>
  )
}

export default NavItem