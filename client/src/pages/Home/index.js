import React from 'react'
import { useContext, useEffect } from "react"
import MyMain from '../../components/Main'
import MealsComponent from "../../components/MealsComponent"
import { MyContext } from "../../context"
import axios from "axios"
function Home() {
  const { meals, setMeals } = useContext(MyContext);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      // .then((res)=>res.json())
      .then(({ data }) => { setMeals(data.meals) })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <MyMain />
      <MealsComponent meals={meals} />
    </div>
  );
}

export default Home