import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';
// import MealModal from "../MealModal"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MyContext } from '../../context';
import { useHistory } from "react-router-dom";
import Recipe from '../../pages/Recipe';
import MealModal from "../MealModal"
import './mealCard.css'
import axios from 'axios';

function MealCard({ strMeal, strMealThumb, strInstructions, strCategory,idMeal,...ingredientsAndMeasures}) {
  const history = useHistory()
  const { setCurrentRecipe } = useContext(MyContext);

  const handleClick = () => {

    setCurrentRecipe({ strMeal, strMealThumb, strInstructions, strCategory,idMeal,...ingredientsAndMeasures})
    history.push("/recipe");

  }

  return (
    <div className="cards">

      <Card style={{ height : '21rem'}}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Button variant="primary" onClick={handleClick}>
            Show details
          </Button>
          
          {/* <MealModal title={strMeal} description={strInstructions} category={strCategory} /> */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default MealCard