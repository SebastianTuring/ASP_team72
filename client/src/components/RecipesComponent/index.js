import React from 'react'
import RecipeCard from '../RecipeCard';
import './styles.css'


function RecipesComponent({recipes}) {
  if(recipes && recipes.length){
    return (
      <div className="recipes-component">
        {recipes.map((recipe) =>(
          <RecipeCard key ={recipe.idMeal}{...recipe}/>
        ))}
      </div>
    );
  }else {
    return <div>
      No Result
    </div>
  }
  
}

export default RecipesComponent