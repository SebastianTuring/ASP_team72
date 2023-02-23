import React from 'react'
import { useContext } from "react"
import { MyContext } from "../../context"
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'



function Recipe() {
  const history = useHistory()

  const { currentRecipe } = useContext(MyContext);


  if (!currentRecipe) {
    history.push("/");
    return
  }
  else {


    const { strMeal, strMealThumb, strInstructions, ...ingredientsAndMeasures } = currentRecipe

    const ingredients = [];
    for (const prop in ingredientsAndMeasures) {
      if (prop.startsWith("strIngredient")) {
        const index = prop.match(/\d+/g)[0];
        const strIngredient = ingredientsAndMeasures[prop];
        const strMeasure = ingredientsAndMeasures[`strMeasure${index}`];

        if (strIngredient && strIngredient.length > 0 && strMeasure && strMeasure.length > 0) {
          ingredients.push({ strIngredient, strMeasure });
        }

      }
    }

    const h2style = { color: "black" }
    const containerStyle = {
      marginTop: "7vh",
      marginBottom: 100,

    }


    const instructionArray = strInstructions ? strInstructions.split('.') : ["No instruction available"]
    if (instructionArray.length > 1) {
      instructionArray.pop()
    }



    return (
      <>
        <Container style={containerStyle}>
          <Row>
            <Col>
              <div class="r-image">
                <img src={strMealThumb}></img>
              </div>

            </Col>
            <Col id="recipe">
              <h1 class="r-name">{strMeal}</h1>

              <h2 style={h2style}>Ingredients</h2>
              <ol class="p-list">
                {ingredients.map((ingredient) => (
                  <li>{ingredient.strIngredient} : {ingredient.strMeasure}</li>
                ))}
              </ol>

              <h2 style={h2style}>Preparation Steps</h2>
              <ol class="p-list">
                {instructionArray.map((instruction) => (
                  <li>{instruction}</li>
                ))}
              </ol>
            </Col>
          </Row>
          <Row class="com-section">
            <h2 style={h2style}>Comments:</h2>
            <div class="sample-com">Be the first to leave a comment!</div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Recipe