import { createContext,useState } from "react";
import React from "react";
export const MyContext = createContext();



function AppContext({children})
{   
    const[recipes,setRecipes]=useState([]);
    const[user,setUser]=useState(null);
    return <MyContext.Provider value ={{recipes,setRecipes,user,setUser}}>{children}</MyContext.Provider>


}

export default AppContext