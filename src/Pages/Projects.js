import React from 'react'
import { Project } from '../components/Project'
import { useProfile } from '../Context/AppContextProvider'

export const Projects = () => {
  const {darkMode} = useProfile()
  return (
    <div className={`${darkMode ? 'bg-[#111e62]' : 'bg-[#9baee9]' }`}>
      <div className={`
       sm:w-[646px] md:w-[756px]  lg:w-[1024px]
       m-auto
       px-4 py-10
       
       flex  flex-col justify-center items-center
      `}>
                 <Project 
                 name="E-commerce App"
                 img ="./images/project01.png"
                 hostUrl = "https://codingwithfaheem.github.io/e-cmomrce-site-react" 
                 githubUrl = "https://github.com/codingWithFaheem/e-cmomrce-site-react"
                 
                 />
                 <Project 
                  name="Goal Tracker"
                 img ="./images/project02.png"
                  hostUrl = "https://strong-biscochitos-9720a5.netlify.app/" 
                  githubUrl = "https://github.com/codingWithFaheem/goalTracker-react"
                  />


      </div>

        
    </div>
  )
}
