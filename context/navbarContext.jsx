'use client'

import { createContext , useContext, useState } from "react"

const NavContext = createContext();

export const NavContextProvider = ({children})=>{
  
    const toggle = false

const OFF = ()=>{
  // change this
  setToggle(false)
}
    return(

        <NavContext.Provider value={toggle}>
            {children}
        </NavContext.Provider>

    )
}

export const useNavContext = ()=>{
    return useContext(NavContext)
}