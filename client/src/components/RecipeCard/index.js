import React from 'react'
import { Card } from 'react-bootstrap'
import RecipeModal from "../RecipeModal"

function RecipeCard({strMeal,strMealThumb,strInstructions}) {
  
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={strMealThumb} />
    <Card.Body>
      <Card.Title>{strMeal}</Card.Title>
      <RecipeModal title={strMeal} description={strInstructions}/>
    </Card.Body>
  </Card>
  )
}

export default RecipeCard