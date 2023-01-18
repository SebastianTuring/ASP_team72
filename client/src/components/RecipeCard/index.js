import React from 'react'
import { Card } from 'react-bootstrap'
import RecipeModal from "../RecipeModal"

function RecipeCard({strRecipe,strRecipeThumb,strInstructions}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={strRecipeThumb} />
    <Card.Body>
      <Card.Title>{strRecipe}</Card.Title>
      <RecipeModal title={strRecipe} description={strInstructions}/>
    </Card.Body>
  </Card>
  )
}

export default RecipeCard