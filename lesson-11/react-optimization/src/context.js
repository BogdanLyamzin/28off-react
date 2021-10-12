import {useState, createContext} from "react";

export const langContext = createContext("ru");

const LangProvider = ({children}) => {
    const [lang, setLang] = useState("en");

    const switchLang = (newLang)=> {
        if(newLang !== lang){
            setLang(newLang);
        }
    }
    
    return (
        <langContext.Provider value={{lang, switchLang}} >
            {children}
        </langContext.Provider>
    )
};

export default LangProvider;
