import React from 'react';

export const Recipe = (props) => {

    return <>
      <h3 class="recipesInfo">{props.recipe.recipeName} </h3>
      <p class="recipesInfo">Click on image for more details</p>
      <img src={props.recipe.recipeImage} onClick={() => props.handleClick(props.recipe.id)}/>
    </>
  } 