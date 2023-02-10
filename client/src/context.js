import { createContext, useState } from "react";
import React from "react";
export const MyContext = createContext();



function AppContext({ children }) {
    const [meals, setMeals] = useState([]);
    const [user, setUser] = useState(null);
    const [currentRecipe, setCurrentRecipe] = useState(null);
    return (
        <MyContext.Provider value={
            {
                meals, setMeals,
                user, setUser,
                currentRecipe, setCurrentRecipe
            }}>
            {children}
        </MyContext.Provider>
    );

}

export default AppContext