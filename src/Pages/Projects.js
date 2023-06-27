import React from 'react'
import { useProfile } from '../Context/AppContextProvider'
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {SiTypescript} from 'react-icons/si';
import {SiReactrouter} from 'react-icons/si';
import {SiFirebase} from "react-icons/si";
import {AiOutlineGithub} from 'react-icons/ai' ;
import {HiOutlineArrowTopRightOnSquare as HiTonSquare} from "react-icons/hi2"
import { motion } from 'framer-motion';
import { headContentAnimation, headTextAnimation } from '../config/motion';

export const Projects = () => {
  const {darkMode} = useProfile()
  return (

    <div className={`${darkMode ? 'bg-[#111e62]' : 'bg-[#9baee9]' }
    `}>
    
      <div className={`
       sm:w-[646px] md:w-[756px]  lg:w-[1024px] xl:w-[1242px]
     m-auto 
       px-4 py-10 
      `}>
          <motion.h1 {...headTextAnimation} className={`${darkMode ? 'text-[#9baee9]' :'text-[#111e62]'}
        font-2  text-[29px] lg:text-[64px] md:ml-10 lg:ml-20
        p-10 lg:pt-20  
      `}>
Projects
      </motion.h1>
      <motion.div {...headContentAnimation}
       className={`   flex flex-col  lg:flex-row lg:flex-wrap lg:gap-[4rem]  
       sm:flex-col justify-center items-center`}>
                 <div className={` 
              border-2 ${darkMode ? 'border-[#9baee9]' : 'border-[#111e62]'}
               rounded-[0.8rem]
                w-full 
              lg:w-[30%] 
               px-2 py-2 sm:mt-20 md:mt-0
              
    `}>
      <div className=' h-[3rem] w-full flex justify-between '>
          <p className={` ${darkMode ?'text-[#9baee9]' :'text-[#111e62]' } font-bold text-[18px] font-1 `}>E-commerce App</p>
          <div className='w-[27%] flex justify-between '>
            <a href="https://github.com/codingWithFaheem/e-cmomrce-site-react" target='blank'>
              <AiOutlineGithub  className={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[2.4rem]`} />
            </a>
            <a href="https://codingwithfaheem.github.io/e-cmomrce-site-react" target='blank'>
              <HiTonSquare  className={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[2.4rem]`} />
            </a>
          </div>
          
      </div>
      <div className='w-[60%] mt-[4px]'>
        <p className={`${darkMode ? 'text-[#9baee9]' :'text-[#111e62]' } text-[14px] `}>Tech Stack</p>
         <div className='flex justify-start gap-x-4'>  
            <FaReact className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
            <SiTailwindcss className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
            <SiTypescript className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
            <SiReactrouter className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
            <SiFirebase className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
        </div> 
      </div>
      <img className='object-contain w-full mt-10 rounded-[0.4rem] ' src="./images/project01.png" alt="" />
     </div>
      <div className={` 
              border-2 ${darkMode ? 'border-[#9baee9]' : 'border-[#111e62]'}
               rounded-[0.8rem]
                w-full 
              lg:w-[30%]
               px-2 py-4 mt-10 md:mt-0`}>
          <div className=' h-[3rem] w-full flex justify-between '>
              <p className={` ${darkMode ?'text-[#9baee9]' :'text-[#111e62]' } font-bold text-[18px] font-1 `}>Rent the Van</p>
              <div className='w-[27%] flex justify-between '>
                <a href="https://github.com/codingWithFaheem/vanlife" target='blank'>
                  <AiOutlineGithub  className={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[2.4rem]`} />
                </a>
                <a href="https://tiny-quokka-603811.netlify.app/" target='blank'>
                  <HiTonSquare  className={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[2.4rem]`} />
                </a>
              </div>
          </div>
            <div className='w-[60%] mt-[4px]'>
              <p className={`${darkMode ? 'text-[#9baee9]' :'text-[#111e62]' } text-[14px] `}>Tech Stack</p>
              <div className='flex justify-start gap-x-4'>  
                  <FaReact className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
                  <SiTailwindcss className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
                  <SiReactrouter className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
                  <SiFirebase className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
              </div> 
          </div>
      <img className='object-contain w-full mt-10 rounded-[0.4rem] ' src="./images/project03.png" alt="" />

      </div>
        <div className={` 
              border-2 ${darkMode ? 'border-[#9baee9]' : 'border-[#111e62]'}
               rounded-[0.8rem]
                w-full 
              lg:w-[30%]
               px-2 py-3 mt-10 mt md:mt-0`}>
          <div className=' h-[3rem] w-full flex justify-between '>
              <p className={` ${darkMode ?'text-[#9baee9]' :'text-[#111e62]' } font-bold text-[18px] font-1 `}>Meme generator App</p>
              <div className='w-[27%] flex justify-between '>
                <a href="https://github.com/codingWithFaheem/e-cmomrce-site-react" target='blank'>
                  <AiOutlineGithub  className={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[2.4rem]`} />
                </a>
                <a href="https://ramzan-memegenerator.netlify.app/" target='blank'>
                  <HiTonSquare  className={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[2.4rem]`} />
                </a>
              </div>        
          </div>
            <div className='w-[60%] mt-[4px]'>
              <p className={`${darkMode ? 'text-[#9baee9]' :'text-[#111e62]' } text-[14px] `}>Tech Stack</p>
              <div className='flex justify-start gap-x-4'>  
                  <FaReact className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
              </div> 
         </div>
      <img className='object-contain w-full mt-10 rounded-[0.4rem] ' src="./images/project04.png" alt="" />

  </div>
            <div className={` 
              border-2 ${darkMode ? 'border-[#9baee9]' : 'border-[#111e62]'}
               rounded-[0.8rem]
                w-full  
              lg:w-[30%] 
               px-2 py-3 mt-10 md:mt-0
              
    `}>
      <div className=' h-[3rem] w-full flex justify-between '>
          <p className={` ${darkMode ?'text-[#9baee9]' :'text-[#111e62]' } font-bold text-[18px] font-1 `}>Goal tracker App</p>
          <div className='w-[27%] flex justify-between '>
            <a href="https://github.com/codingWithFaheem/goalTracker-react" target='blank'>
              <AiOutlineGithub  className={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[2.4rem]`} />
            </a>
            <a href="https://strong-biscochitos-9720a5.netlify.app/" target='blank'>
              <HiTonSquare  className={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[2.4rem]`} />
            </a>
          </div>
          
      </div>
      <div className='w-[60%] mt-[4px]'>
        <p className={`${darkMode ? 'text-[#9baee9]' :'text-[#111e62]' } text-[14px] `}>Tech Stack</p>
         <div className='flex justify-start gap-x-4'>  
            <FaReact className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
            <SiTailwindcss className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
            <SiFirebase className ={`${darkMode ?'text-[#9baee9]':'text-[#111e62]'} text-[1.2rem] `}/>
        </div> 
      </div>
      <img className='object-contain w-full mt-10 rounded-[0.4rem] ' src="./images/project02.png" alt="" />
          
            </div>
                        </motion.div>
      </div>

    </div>
  )
}
