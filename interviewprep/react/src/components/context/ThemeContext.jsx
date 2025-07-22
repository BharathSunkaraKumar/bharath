import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const  ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
    const toggle = () => {
        setIsDark((prev) => !prev)
    }
    useEffect(()=>{
        isDark ? document.documentElement.classList.add('dark'): (
            document.documentElement.classList.remove('dark')
        )
    },[isDark])
    return <ThemeContext.Provider value={{isDark, toggle}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContext;