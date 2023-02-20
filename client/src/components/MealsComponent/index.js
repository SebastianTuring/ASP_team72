import React from 'react'
import MealCard from '../MealCard';
import './styles.css'
import Carol from '../Carol'

function MealsComponent({meals}) {
  return (
    <div className="whole">
      <div className="imagecarol">
        <Carol />
        
        
      </div>
    
    <div className="meals-component">
      {meals.map((meal) =>(
        <MealCard key ={meal.idMeal}{...meal}/>
        
      ))}
    </div>


        
    </div>
  );
}

export default MealsComponent