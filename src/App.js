import './App.css';
import React , {useState}  from 'react'
import Home from './Pages/Home';
import Navbar from './components/navbar/Navbar';
import { SideBarMenu } from './components/navbar/menu/SideBarMenu';
import { About } from './Pages/About';


const  App = () => {
  const [sideBarMenu , setSideBarMenu] = useState(false)
  const [darkMode , setDarkMode] = useState(false)
  return (

    <div className=" 
    
     relative
 
    ">
         <div className={`  z-10   flex flex-col items-center ${darkMode ? 'bg-[#111e62]' : 'bg-[#9baee9]' } `}>
               <Navbar  
                  sideBarMenu = {setSideBarMenu} 
                  setSideBarMenu = {setSideBarMenu} 
                  darkMode= {darkMode} 
                  setDarkMode= {setDarkMode}/>
                  <Home  darkMode={darkMode}/>
          </div>
                  <About />

                   {sideBarMenu &&  <SideBarMenu  setSideBarMenu = {setSideBarMenu}
                                  darkMode= {darkMode} 
                                  setDarkMode= {setDarkMode}
                                  /> }
                 
            </div>

  );
}

export default App;
