import React , {createContext , useContext, useState} from 'react'
 const PortfolioContext = createContext()
 export const  useProfile = () => {
  return useContext(PortfolioContext) 
     
 } ;

export const AppContextProvider = ({children}) => {
    const [darkMode , setDarkMode] = useState(true)
    const [sideBarMenu , setSideBarMenu] = useState(false)

  return (
    <PortfolioContext.Provider value= {{
      darkMode,
      sideBarMenu,
      setSideBarMenu,
      setDarkMode
    }}>
      {children}
        
    </PortfolioContext.Provider>
  )
}
