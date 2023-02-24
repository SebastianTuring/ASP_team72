import React from 'react'
import MealCard from '../MealCard';
import './styles.css'
import Carol from '../Carol'

function MealsComponent({ meals }) {
  return (
    <div className="whole">
      <div className="imagecarol">
        <Carol />


      </div>

      <div className="meals-component">
        {meals ? meals.map((meal) => (
          <MealCard key={meal.idMeal}{...meal} />

        )) : <>No recipe available</>}
      </div>

    </div>
  );
}

export default MealsComponent