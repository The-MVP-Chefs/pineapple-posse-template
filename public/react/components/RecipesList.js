import React from 'react';
import { Recipe } from './Recipe';


export const RecipesList = ({recipes, handleClick,setIsAddingRecipe}) => {
	return <>
		<div id="addButton" ><button onClick={() => setIsAddingRecipe(true)} >Add a New Recipe</button></div>
		<div class="item">
		{
			recipes.map((item, idx) => {
				return <Recipe item={item} key={idx} handleClick={handleClick} />
			})
		}
		</div>
	</>
} 
