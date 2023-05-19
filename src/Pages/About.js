import React, { useState } from 'react'
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {IoLogoSass} from 'react-icons/io';
import {SiTypescript} from 'react-icons/si';
import {TfiHtml5} from 'react-icons/tfi';
import { Skills } from '../components/Skills';


export const About = () => {
  return (
    <div className='  w-full h-[100vh] sm:h-[85vh]  md:h-[150vh]    py-6 px-8 bg-[#cad7fd]
    flex flex-col justify-start  md:justify-start items-center relative'>
      <p className={`absolute top-[4rem] md:top-[4.9rem] lg:top-[3.2rem] px-8
       text-[#333188] bg-[#cad7fd] text-[28px]  md:text-[45px] lg:text-[65px] rounded-[18px] w-fit`}>About Me</p>
           
              <div className={` border-4 border-[#333188] 
              py-7 px-4 md:py-10 lg:py-10 md:px-12 mt-16 md:mt-24
              h-[99vh] md:h-[110vh]   w-full  md:w-[60vw] lg:w-[64vw]   rounded-[18px] md:rounded-[24px]
              
              `}>

                   <div className={` lg:h-[6rem]  md:mt-0 rounded-[16px] py-2 flex justify-center items-center`}>
                        {/* <img src="/images/faheemkhan.jpeg" alt="men" 
                        className=' object-contain h-24 w-24 '
                        /> */}
                        <p className='  text-center  text-[#333188] text-[24px]  md:text-[44px]  lg:text-[64px] leading-[2rem]'>Faheem Khan</p>
                  </div>
                  <p className=' font-1 font-bold mt-[14px] px-4 lg:px-8 2xl:px-[10rem] md:mt-[32px]
                  text-[#333188]  text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]   text-center
                  leading-[1.5rem] md:leading-[2rem] 
                  '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque necessitatibus veniam corporis 
                    error assumenda! Eum perferendis repellat molestias, aliquam dolore voluptatibus inventore quasi sunt,
                     blanditiis temporibus fugit sapiente esse exercitationem ipsa voluptates delectus facilis. Minus!
                  </p>
                  <p className='  mt-3  2xl:mt-20 text-[#333188] text-[24px] md:text-[44px]  lg:text-[65px]   text-center'>Skills</p>
                  <div className='
                                  mt-4  m-auto 
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
    </div>
  )
}
