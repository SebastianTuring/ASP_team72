import React from 'react'
import RecipeCard from '../RecipeCard';
import './styles.css'


function RecipesComponent({recipes}) {
  return (
    <div className="recipes-component">
      {recipes.map((recipe) =>(
        <RecipeCard key ={recipe.idRecipe}{...recipe}/>
      ))};
    </div>
  );
}

export default RecipesComponent