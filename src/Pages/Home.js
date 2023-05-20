import React from 'react'

 export const Home = ({darkMode}) => {
  const hireBtnModeEffect = darkMode ? 'border-[#9baee9] text-[#9baee9] hover:text-[#333188] hover:bg-[#9baee9]' : 'border-[#333188] text-[#333188] hover:bg-[#3943b3]  hover:text-[#9baee9] hover:bg-[#333188]' ;

  return (
    <div  className=' max-w-[1240px] h-screen  mt-20  px-8 md:px-8
                       flex flex-col items-center md:items-start md:flex-row   w-[100%]
                       '>
                        
    <div className=' md:relative  h-[60vh] '>
        <div  className=' leading-[4rem] smpl-10 md:pl-0  md:leading-[8rem]'>
            <p className={`text-[42px] sm:text-[52px] md:text-[60px] md:ml-20  ${darkMode ? 'text-[#9baee9]' : 'text-[#333188]' } `}>I'm</p>
           <p className={`font-2 text-[66px] sm:text-[74px] md:text-[100px] 2xl:text-[] tracking-[8px] md:ml-20 ${darkMode ? 'text-[#9baee9]' : 'text-[#333188]' }  `}>  Faheem  <br /> 
           <span className=' ml-28 md:ml-0'> khan</span>
           
           </p>
         </div>
          <p  className={`${darkMode ? 'text-[#9baee9]' : 'text-[#333188]'} hidden md:block  text-[28px] absolute rotate-[90deg] top-[15rem] left-[-4rem]`}>
          UI / UX DESIGNER
         </p>
         <p  className={`${darkMode ? 'text-[#9baee9]' : 'text-[#333188]'}   text-[22px] md:text-[30px] ml-10 md:ml-24` }>
          FRONTEND DEVELOPER
         </p> 
         <div className=' md:ml-24 mt-10  md:mt-24'>
              <div className=' w-full  md:w-[22rem] flex flex-col md:flex-row items-center justify-between'>
              <button className={` md:text-[19px] font-bold text-white  rounded-[14px] border-none w-full sm:w-[70%]  md:w-[11rem]  py-[18px] md:py-[22px] bg-[#3943b3]   tracking-[4px]`}>Projects</button>
              <button className={` border-4 ${hireBtnModeEffect}  md:text-[19px] font-bold rounded-[14px]  w-full sm:w-[70%] md:w-[9rem]  py-[18px] md:py-[20px] mt-4 md:mt-0  tracking-[4px]`}>Hire Me</button>

              </div>

         </div>
    </div>
        {/* <div className=' border-2 h-[40vh] w-[40%] ml-20  bg-gradient-radial from-purple-500 via-pink-500 to-red-500 '>

        </div> */}
       
    </div>
   
  )
}
