import React from 'react'
import { motion } from 'framer-motion';
import {  headTextAnimation,
          headContainerAnimation ,
          headContentAnimation} from '../config/motion';
import { useProfile } from '../Context/AppContextProvider';
 export const Home = () => {
  const {darkMode} = useProfile()
  const hireBtnModeEffect = darkMode ? ' text-[#9baee9] hover:text-[#333188] hover:bg-[#9baee9]' : 'border-[#333188] text-[#333188] hover:bg-[#3943b3]  hover:text-[#9baee9] hover:bg-[#333188]' ;

  return (
    <div  className=' max-w-[1240px] h-screen lg:h-[60vh]  mt-20  sm:px-8 md:px-8
                       flex flex-col  items-center md:items-start md:flex-row   w-[100%]
                       '>
                        
  <div>
    <motion.div className=' md:relative  h-[42vh] md:h-[52vh] ' {...headContainerAnimation}>
        <motion.div className=' leading-[4rem]  sm:pl-10 md:pl-0  md:leading-[6rem] ' 
        {...headTextAnimation}
              
        >
            <p className={`text-[46px] sm:text-[52px] md:text-[40px] md:ml-20  ${darkMode ? 'text-[#9baee9]' : 'text-[#333188]' } `}>I'm</p>
           <p className={`font-2 text-[52px] sm:text-[74px] md:text-[100px] tracking-[8px] md:ml-20 ${darkMode ? 'text-[#9baee9]' : 'text-[#333188]' }  `}>  Faheem  <br /> 
           <span className=' ml-28 md:ml-0'> khan</span>
           
           </p>
         </motion.div>
          <p  className={`${darkMode ? 'text-[#7e90c9]' : 'text-[#333188]'} hidden md:block  text-[25px] absolute rotate-[90deg] top-[10rem] left-[-2.5rem]`}>
          UI / UX DESIGNER
         </p>
         <p  className={`${darkMode ? 'text-[#7e90c9]' : 'text-[#333188]'}   text-[22px] md:text-[30px] ml-10 md:ml-24` }>
          FRONTEND DEVELOPER
         </p> 
   </motion.div>
        
    </div>
        
       
    </div>
   
  )
}
