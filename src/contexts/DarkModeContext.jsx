import React, { createContext, useState } from 'react'

const DarkModeContext = createContext();


const DarkModeProvider = ({children}) => {
    //Always shiftes between 'dark' and 'light' string values
    const [mode, setMode] = useState('light')

    const changeMode = () => {
        let newMode = mode == 'light'? 'dark' : 'light';
        setMode(newMode)
    }


    const data = {mode, setMode, changeMode}

  return <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
}

export {DarkModeProvider}

export default DarkModeContext