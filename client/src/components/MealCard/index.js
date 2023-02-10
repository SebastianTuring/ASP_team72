import React from 'react'
import { Card } from 'react-bootstrap'
import MealModal from "../MealModal"
import './mealCard.css'




function MealCard({strMeal,strMealThumb,strInstructions,strCategory}) {
  
  return (
  <div className="cards">

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <MealModal title={strMeal} description={strInstructions} category={strCategory} />
      </Card.Body>
    </Card>
  </div>
  )
}

export default MealCard