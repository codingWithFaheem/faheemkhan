import React , {createContext , useContext, useState} from 'react'
 const PortfolioContext = createContext()
 export const  ProfileContext = () => {
  return useContext(PortfolioContext) 
     
 } ;

export const AppContext = ({childern}) => {
    const [sideBarMenu , setSideBarMenu] = useState(false)
      const openMenuBar = () => setSideBarMenu(true) ;
      const closeMenuBar = () => setSideBarMenu(false) ;

  return (
    <PortfolioContext.Provider value= {{
      openMenuBar ,
      closeMenuBar,
      sideBarMenu
    }}>
      {childern}
        
    </PortfolioContext.Provider>
  )
}
