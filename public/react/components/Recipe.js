import React from 'react';

export const Recipe = (props) => {

    return <>
      <h3 class="recipesInfo">{props.item.title} ${props.item.price}</h3>
      <p class="recipesInfo">Click on image for more details</p>
      <img src={props.item.image} onClick={() => props.handleClick(props.item.id)}/>
    </>
  } 