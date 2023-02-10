import React from 'react'
import { useState,useContext} from 'react';
import './style.css'
import { InputGroup, FormControl,Button } from 'react-bootstrap'
import { MyContext } from '../../context';
import axios from "axios"



function MyMain() 
{

  const[searchInput,setSearchInput]=useState("");
  const{setMeals} = useContext(MyContext)
  function handleSearch(search)
  {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then((res)=>res.json)
    .then((data) => setMeals(data.meals))
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
            onChange={(e)=>setSearchInput(e.target.value)}
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
