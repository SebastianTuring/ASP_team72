import React from 'react'
import { useContext, useEffect } from "react"
import MyMain from '../../components/Main'
import MealsComponent from "../../components/MealsComponent"
import { MyContext } from "../../context"
import axios from "axios"
import Filter from '../../components/Filter'
function Home() {
  const { meals, setMeals } = useContext(MyContext);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      // .then((res)=>res.json())
      .then(({ data }) => {
        const arr = []
        for (const meal of data.meals) {
          if (meal.strIngredient1 && meal.strInstructions) {
            arr.push(meal)
          }
        }
        setMeals(arr)
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <MyMain />
      <Filter />
      <MealsComponent meals={meals} />
    </div>
  );
}

export default Home