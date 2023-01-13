import React, { useEffect,useState } from 'react';
import './App.css';

const App = () => {
 const url = "/recipes";
 const [recipes, setRecipes] = useState([])

 useEffect(() => {
   fetch(url, { method: "GET" })
     .then((res) => res.json())
     .then((data) => {
       setRecipes(data);
     })
     .catch((err) => {
       console.log(err);
       console.log("err");
     });
 }, []);

    return (
      <div classname="App">
        <h1>Recipes</h1>
        {recipes.map((recipe,index) =>
          <div key={index}>
            {recipe.name}
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Preparation insturction: {recipe.instruction}</p>
            <br />
          </div>
        )}
      </div>
    );
}

export default App;