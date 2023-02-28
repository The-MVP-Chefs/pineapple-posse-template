import React from 'react';

export const User = (props) => {

  return <>
    <h3>{props.user.name}</h3>
    <img src={props.user.image} alt={props.user.name} />
  </>
} 
	