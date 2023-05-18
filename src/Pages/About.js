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
    <div className='  w-full h-[115vh] md:h-[110vh] lg:h-[130vh]    py-6 px-8 bg-[#cad7fd]
    flex flex-col justify-start  md:justify-start items-center relative'>
      <p className={`absolute top-[4rem] px-8
       text-[#333188] bg-[#cad7fd] text-[28px] md:text-[65px] rounded-[18px] w-fit`}>About Me</p>
           
              <div className={` border-4 border-[#333188] 
              py-7 px-4  md:py-16 md:px-12 mt-16 md:mt-24
              h-[99vh] md:h-[72vh] lg:h-[96vh]   w-full  md:w-[60vw] lg:w-[52vw] xl:w-[52vw]  rounded-[18px] md:rounded-[24px]
              
              `}>

                   <div className={`border- border-[#333188] rounded-[16px] py-2 flex items-center`}>
                        <img src="/images/faheemkhan.jpeg" alt="men" 
                        className=' object-contain h-24 w-24 '
                        />
                        <p className=' md:ml-20  text-[#333188] text-[29px]  md:text-[64px] leading-[2rem]'>Faheem Khan</p>
                  </div>
                  <p className=' font-1 font-bold mt-[14px] px-4 md:px-12 md:mt-[20px
                  text-[#333188]  text-[16px] md:text-[22px]  text-center
                  leading-[1.5rem] md:leading-[2rem] 
                  '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque necessitatibus veniam corporis 
                    error assumenda! Eum perferendis repellat molestias, aliquam dolore voluptatibus inventore quasi sunt,
                     blanditiis temporibus fugit sapiente esse exercitationem ipsa voluptates delectus facilis. Minus!
                  </p>
                  <p className=' text-[#333188] text-[28px] mt-3 md:text-[65px] text-center'>Skills</p>
                  <div className='
                                  mt-4 m-auto px-4
                                  flex justify-center gap-8 md:justify-evenly flex-wrap evenly
                                  h-[] md:h-[15rem] w-[]  md:w-[66%] lg:w-[76%] 
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
