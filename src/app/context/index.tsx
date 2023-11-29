"use client"
import { createContext, useState } from 'react'


const ApplyContext = createContext({});

export const ApplyContextProvider = ({ children }: { children: React.ReactNode }) => {


  return <ApplyContext.Provider value={{}}>{children}</ApplyContext.Provider>
}