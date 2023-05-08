import {useState, useEffect,useContext, createContext} from 'react';


export const changeContext = createContext();
export const useChange = ()=>{
    const context = useContext(changeContext)
    if(!context) throw new Error('changeContext error')
    return context
} 

export const ChangeProvider = ({children}) => {
    const [change, setChange]= useState(false); 
    useEffect(()=>{
        setTimeout(() => {
            setChange(true)
        }, 100);
        
    },[change])
    return (
        <changeContext.Provider value={{change,setChange}}>
            {children}
        </changeContext.Provider>
    )
}