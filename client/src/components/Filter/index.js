
import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../../context';
import './style.css'


function Filter() {
    const { setFilter, filter } = useContext(MyContext)

    const handleFilterClick = (f) => {
        console.log("handleFilterClick");
        console.log(f);
        setFilter(f)
    }

    return (
        <div className="filterComponent">
            <div
                // onClick={() => setOpen(!open)}
                // aria-controls="example-collapse-text"
                // aria-expanded={open}
                id="filter"
            >
                {/* {`SEARCH FILTERS ${open ? "v" : ">"}`} */}
                SEARCH FILTERS
            </div>
            <div
                className={filter === "ingredient" ? "clickedFilterItem" : "filterItem"}
                id="ingredient"
                onClick={() => { handleFilterClick("ingredient") }}>
                Main ingredient
            </div>
            <div
                className={filter === "category" ? "clickedFilterItem" : "filterItem"}
                id="category"
                onClick={() => { handleFilterClick("category") }}>
                Category
            </div>
            <div
                className={filter === "area" ? "clickedFilterItem" : "filterItem"}
                id="area"
                onClick={() => { handleFilterClick("area") }}>
                Area
            </div>
            <div
                className={filter === "none" ? "clickedFilterItem" : "filterItem"}
                id="none"
                onClick={() => { handleFilterClick("none") }}>
                None
            </div>
            {/* <Collapse in={open}>
                <div id="example-collapse-text" onChange={handleChange}>
                    <Form.Check
                        inline
                        label="main ingredient"
                        value="ingredient"
                        name="group1"
                        type="radio"
                    />
                    <br />
                    <Form.Check
                        inline
                        label="category"
                        value="category"
                        name="group1"
                        type="radio"
                    />
                    <br />
                    <Form.Check
                        inline
                        label="area"
                        value="area"
                        name="group1"
                        type="radio"
                    />
                    <br />
                    <Form.Check
                        inline
                        label="none"
                        value="none"
                        name="group1"
                        type="radio"
                    />
                </div>
            </Collapse> */}
        </div>
    )
}





export default Filter
