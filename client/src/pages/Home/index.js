import {useContext, useEffect} from "react"
import React from 'react'
import MyJumbotron from '../../components/Jumbotron'
import axios from "axios"
import RecipesComponent from "../../components/RecipesComponent"
import { MyContext } from "../../context"

function Home() {
  const {recipes,setRecipes} =useContext(MyContext);
  useEffect(() => {
    axios
    .get("https://www.therecipedb.com/api/json/v1/1/search.php?f=a")
    .then(({data}) => setRecipes(data.recipes))
    .catch((error) => console.log(error));

  }, []);
  return (
    <div>
      <MyJumbotron />
      <RecipesComponent recipes={recipes} />
    </div>
  );
}

export default Home