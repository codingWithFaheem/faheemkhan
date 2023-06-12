import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai' ;
import { useProfile } from '../Context/AppContextProvider';

export const Project = ({name , hostUrl , githubUrl,img}) => {
  const {darkMode} = useProfile()
  return (
    <div className={` 
            p-5 
            rounded-[14px]
            flex flex-col  justify-center items-center   lg:flex-row
            mt-10 lg:mt-20
           ${darkMode ?'bg-[#617fd7]': 'bg-[#cad7fd]'}


    `}>
            <img src={img} alt="" 
             className="
               object-contain 
               w-[80vw] sm:w-[44vw] lg:w-[24vw] lg:h-[40vh] 
              xl:ml-10
              
             "/>
            <div className={`
              w-[80vw] sm:w-[45vw] lg:w-[50vw]  xl:w-[55vw] lg:h-[40vh]
              p-4 lg:px-12 

            

            `}>
                <p className={`font-1  
                font-bold  text-center lg:text-start text-[#333881] text-[22px] md:text-[26px] lg:text-[38px]
                `}
                > {name}
                </p>
                <p className={` 
                        mt-5
                     font-1 font-bold   text-[#333881] leading-[1.2rem] lg:leading-[1.8rem] text-[14px] md:text-[18px]`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis non fugiat vero, tempore facilis, obcaecati praesentium recusandae sequi, maxime veritatis amet expedita alias quibusdam?
                </p>
                <div className='
                mt-5 w-full lg:w-[70%] xl:w-[56%]
                 flex  justify-between items-center
        

                '>
                    <div className={` flex  justify-between items-center
                      px-[17px] xl:w-[44%] inl py-2 border-none bg-[#333881] text-[#cad7fd] rounded-[8px]`}><a href={githubUrl} target='blank'> Github </a> <AiOutlineGithub className=' text-[20px] text-[#cad7fd]' /></div>
                    <button className={`px-4 py-2 border-none bg-[#333881] text-[#cad7fd] rounded-[8px]`}><a href={hostUrl} target='blank'>Live Demo</a></button>
                </div>
            </div>

    </div>
  )
}
