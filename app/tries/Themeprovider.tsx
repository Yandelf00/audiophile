import React, { useState, useContext} from 'react'

  
const Darktheme = React.createContext<boolean | undefined>(undefined);
const Setdark = React.createContext<(() => void) | undefined>(undefined);

export function Theeme(){
    return useContext(Darktheme)
}

export function Settheeme(){
    return useContext(Setdark)
}

export function Themeprovider({children,}: {children: React.ReactNode}) 
{
    const [darkuthemu, setDarkuthemu] = useState(true)
    function toggle(){
        setDarkuthemu(prevValue => !prevValue)
    }
  return (
    <div>
        <Darktheme.Provider value={darkuthemu}>
            <Setdark.Provider value={toggle}>
                {children}
            </Setdark.Provider>
        </Darktheme.Provider>
    </div>
  )
}
