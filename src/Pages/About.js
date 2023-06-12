import React from 'react';
import { useProfile } from '../Context/AppContextProvider';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {IoLogoSass} from 'react-icons/io';
import {SiTypescript} from 'react-icons/si';
import {TfiHtml5} from 'react-icons/tfi';
import { Skills } from '../components/Skills';
import { motion } from 'framer-motion';
import {  headTextAnimation,
          headContainerAnimation ,
          headContentAnimation} from '../config/motion';
export const About = () => {
  const {darkMode} = useProfile()
  return (
     <motion.div className={`w-full h-[100vh] sm:h-[85vh]  md:h-[90vh]
                                  py-6 px ${darkMode ? 'bg-[#111e62]' : '-8 bg-[#cad7fd] '}
                              flex flex-col justify-start  md:justify-start items-center relative`}
     {...headContainerAnimation}
    >
      <motion.p {...headTextAnimation} className={`absolute top-[4rem] md:top-[4.9rem] lg:top-[3.2rem] px-8
        ${darkMode ? 'text-[#9baee9]' : 'text-[#333188]' } ${darkMode ? 'bg-[#111e62]' : '-8 bg-[#cad7fd] '} text-[28px]  md:text-[45px] lg:text-[65px] rounded-[18px] w-fit`}>About Me</motion.p>
           
              <div className={`
              py-7 px-4 md:py-10 lg:py-10 md:px-12 mt-16 md:mt-24
              h-[99vh] md:h-[110vh]   w-full  md:w-[60vw] lg:w-[64vw]   rounded-[18px] md:rounded-[24px]
              
              `}>
   
                  <motion.p {...headContentAnimation} className={` font-1 font-bold mt-[14px] px-4 lg:px-8 2xl:px-[10rem] md:mt-[32px]
                   ${darkMode ? 'text-[#9baee9]' : 'text-[#333188]' } text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]   text-center
                  leading-[1.5rem] md:leading-[2rem] 
                  `}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque necessitatibus veniam corporis 
                    error assumenda! Eum perferendis repellat molestias, aliquam dolore voluptatibus inventore quasi sunt,
                     blanditiis temporibus fugit sapiente esse exercitationem ipsa voluptates delectus facilis. Minus!
                  </motion.p>
                  <div className='
                                  mt-16  m-auto 
                                  flex justify-center gap-8 md:justify-evenly flex-wrap evenly
                                  w-[90%]  sm:w-[80%]  md:w-[90%] lg:w-[76%] xl:w-[46%]
                                  '>
                          <Skills Icon = {FaReact} name = 'Rect' />
                          <Skills Icon = {TbBrandJavascript} name = 'JavaScript' />
                          <Skills Icon = {SiTailwindcss} name = 'Tailwind css' />
                          <Skills Icon = {IoLogoSass} name = 'Sass' />
                          <Skills Icon = {SiTypescript} name = 'typescript' />
                          <Skills Icon = {TfiHtml5} name = 'html' />


                  </div>
           
              </div>
    </motion.div>
  )
}
