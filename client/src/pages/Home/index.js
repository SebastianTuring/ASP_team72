import {useContext, useEffect} from "react"
import React from 'react'
import MyJumbotron from '../../components/Jumbotron'
import axios from "axios"
import MealsComponent from "../../components/MealsComponent"
import { MyContext } from "../../context"

function Home() {
  const {meals,setMeals} =useContext(MyContext);
  useEffect(() => {
    axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(({data}) => setMeals(data.meals))
    .catch((error) => console.log(error));

  }, []);
  return (
    <div>
      <MyJumbotron />
      <MealsComponent meals={meals} />
    </div>
  );
}

export default Home