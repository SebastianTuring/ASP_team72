import React from 'react'
import MealCard from '../MealCard';
import './styles.css'


function MealsComponent({meals}) {
  return (
    <div className="meals-component">
      {meals.map((meal) =>(
        <MealCard key ={meal.idMeal}{...meal}/>
      ))};
    </div>
  );
}

export default MealsComponent