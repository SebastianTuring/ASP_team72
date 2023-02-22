import React from 'react'
import { useState, useContext } from 'react';
import './style.css'
import { InputGroup, FormControl, Button, Collapse, Form } from 'react-bootstrap'
import { MyContext } from '../../context';
import axios from "axios"



function MyMain() {

  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState("")
  const { setMeals } = useContext(MyContext)

  function handleChange(e) {
    setFilter(e.target.value)
    console.log(e.target.value);
  }
  function handleSearch(search) {
    if (filter === "ingredient") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
        .then(({ data }) => setMeals(data.meals))
    } else if (filter === "area") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchInput}`)
        .then(({ data }) => setMeals(data.meals))
    } else if (filter === "category") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`)
        .then(({ data }) => setMeals(data.meals))
    } else {
      // commented bc it does not work as for now (for advanced search maybe?)
      //axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      //.then((res)=>res.json)
      //.then((data) => setMeals(data.meals))
      // fix suggested by Jerry
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(({ data }) => setMeals(data.meals))
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
          />
          <Button variant="danger" id="recipe-search-button" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
        <div style={{ marginRight: "auto" }}>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Filter
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text" onChange={handleChange}>
              <Form.Check
                inline
                label="main ingredient"
                value="ingredient"
                name="group1"
                type="radio"
              />
              <Form.Check
                inline
                label="category"
                value="category"
                name="group1"
                type="radio"
              />
              <Form.Check
                inline
                label="area"
                value="area"
                name="group1"
                type="radio"
              />
              <Form.Check
                inline
                label="none"
                value="none"
                name="group1"
                type="radio"
              />
            </div>
          </Collapse>
        </div>
      </div>

    </div>
  )
}





export default MyMain
