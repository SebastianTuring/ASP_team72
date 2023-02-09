import React from 'react'
import { useContext } from "react"
import { MyContext } from "../../context"
import { useHistory } from "react-router-dom";

function Recipe() {
  const history = useHistory()
  const { currentRecipe } = useContext(MyContext);
  if (!currentRecipe) {
    history.push("/");
    return
  }
  else {
    const { strMeal, strMealThumb, strInstructions, strCategory } = currentRecipe
    return (
      <>
        <h1>This is hidden behind the navbar</h1>
        <h1>{strMeal}</h1>
        <img src={strMealThumb}></img>
        <p>{strInstructions}</p>
      </>
    );
  }
}

export default Recipe