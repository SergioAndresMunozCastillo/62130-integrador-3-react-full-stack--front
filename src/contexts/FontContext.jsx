import React, { createContext, useState } from 'react'

const FontContext = createContext();


const FontProvider = ({children}) => {
    //Always shiftes between 'dark' and 'light' string values
    const [font, setFont] = useState('prata')

    const changeFont = (e) => {
        let newFont = 'prata';

        console.log(e)
        switch(e){
            case 'abril': 
                newFont = 'abril';
                break;
            case 'eb': 
                newFont = 'eb';
                break;
            default: 
                newFont = 'prata';
        }
        setFont(newFont)
    }


    const data = {font, setFont, changeFont}

  return <FontContext.Provider value={data}>{children}</FontContext.Provider>
}

export {FontProvider}

export default FontContext