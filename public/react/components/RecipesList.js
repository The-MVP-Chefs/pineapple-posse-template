import React from 'react';
import { Recipe } from './Recipe';


export const RecipesList = ({recipes, handleClick,setIsAddingRecipe}) => {
	return <>
		<div id="addButton" ><button onClick={() => setIsAddingRecipe(true)} >Add a New Recipe</button></div>
		<div class="recipe">
		{
			recipes.map((recipe, idx) => {
				return <Recipe recipe={recipe} key={idx} handleClick={handleClick} />
			})
		}
		</div>
	</>
} 
