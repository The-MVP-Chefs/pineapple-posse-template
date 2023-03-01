import React from 'react';

export const Recipe = (props) => {

    return <>
      <h3 class="recipesInfo">{props.item.recipeName} ${props.item.userId}</h3>
      <p class="recipesInfo">Click on recipeImage for more details</p>
      <img src={props.item.recipeImage} onClick={() => props.handleClick(props.item.id)}/>
    </>
  } 