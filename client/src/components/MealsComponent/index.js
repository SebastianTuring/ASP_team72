import React from 'react'
import MealCard from '../MealCard';
import './styles.css'
import Carol from '../Carol'

function MealsComponent({ meals }) {
  return (
    <div className="whole">
      <h1>Your Recipes</h1>

      <div className="meals-component">
        {meals ? meals.map((meal) => (
          <MealCard key={meal.idMeal}{...meal} />

        )) : <>No recipe available</>}
      </div>
      <Carol />
    </div>

  )
}

export default MealsComponent