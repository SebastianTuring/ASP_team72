import React from 'react'
import { useState, useContext } from 'react';
import './style.css'
import { InputGroup, FormControl, Button, Collapse, Form } from 'react-bootstrap'
import { MyContext } from '../../context';
import axios from "axios"



function MyMain() {

  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false)
  // const [filter, setFilter] = useState("")
  const { setMeals, filter } = useContext(MyContext)

  function loadMeals(meals) {
    const arr = []
    if (meals) {
      for (const meal of meals) {
        if (meal.strIngredient1 && meal.strInstructions) {
          arr.push(meal)
        }
      }
    }
    console.log(arr);
    if (arr.length) {
      setMeals(arr)
    } else {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(({ data }) => {
          const arr2 = []
          if (data.meals) {
            for (const meal of data.meals) {
              if (meal.strIngredient1 && meal.strInstructions) {
                arr2.push(meal)
              }
            }
          }
          setMeals(data.meals)
        })
    }
  }
  // function handleChange(e) {
  //   setFilter(e.target.value)
  //   console.log(e.target.value);
  // }
  function handleSearch(search) {
    if (filter === "ingredient") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
        .then(({ data }) => loadMeals(data.meals))
    } else if (filter === "area") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchInput}`)
        .then(({ data }) => loadMeals(data.meals))
    } else if (filter === "category") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`)
        .then(({ data }) => loadMeals(data.meals))
    } else {
      // commented bc it does not work as for now (for advanced search maybe?)
      //axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      //.then((res)=>res.json)
      //.then((data) => setMeals(data.meals))
      // fix suggested by Jerry
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(({ data }) => loadMeals(data.meals))
    }
  }
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleSearch("")
    }
  }

  return (
    <div className="my-main">
      <div className="button-input">
        <InputGroup className="mb-3 ">
          <FormControl
            placeholder="Search Recipe"
            aria-label="Recipe search input"
            aria-describedby="recipe-search-button"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button variant="danger" id="recipe-search-button" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  )
}





export default MyMain
