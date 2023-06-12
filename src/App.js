import './App.css';
import React , {useState}  from 'react'
import { SideBarMenu } from './components/navbar/menu/SideBarMenu';
import { Home, About, Contact, Projects } from './Pages';
import {useProfile } from './Context/AppContextProvider';
import Navbar from './components/navbar/Navbar';


const  App = () => {
 const {darkMode , sideBarMenu} = useProfile()

  return (

    <div className="relative">
        <div className={`  z-10   flex flex-col items-center ${darkMode ? 'bg-[#111e62]' : 'bg-[#9baee9]' } `}>
         <Navbar />
         <Home />
        </div>
        <About />
        <Projects />
        <Contact />
        {sideBarMenu &&  <SideBarMenu  /> }
    </div>

  );
}

export default App;
