import React from 'react';
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { SingleViewRecipe } from './SingleViewRecipe';
import apiURL from "../api";



export const Recipe = (props) => {

 
 
  return (
    <>
      <div className="d-flex justify-content-center ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.recipe.recipeImage} />
          <Card.Body>
            <Card.Title>{props.recipe.recipeName}</Card.Title>
            <Card.Text>{props.recipe.ingredients}</Card.Text>
            <Button
              variant="primary"
              onClick={() => props.handleClick(props.recipe.id)}
            >
              View Recipe Details
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};



// export const Recipe = (props) => {

//     return <>
//       <h3 class="recipesInfo">{props.recipe.recipeName} </h3>
//       <p class="recipesInfo">Click on image for more details</p>
//       <img src={props.recipe.recipeImage} onClick={() => props.handleClick(props.recipe.id)}/>
//     </>
//   } 