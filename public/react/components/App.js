import React, { useState, useEffect } from 'react';
import { UsersList} from './UsersList';
import { RecipesList} from './RecipesList';
import { SingleViewRecipe } from './SingleViewRecipe';
import { UpdateRecipe } from './UpdateRecipe';
import { AddRecipe} from './AddRecipe';
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//import Button from "react-bootstrap/Button";


// import and prepend the api url to any fetch calls
//
import apiURL from '../api';

export const App = () => {

	const [users, setUsers] = useState([]);
	const [recipes, setRecipes] = useState([]);
	const [singleViewRecipe, setSingleViewRecipe] = useState(null);
	const [isAddingRecipe, setIsAddingRecipe] = useState(false);
	const [isDeleted, setIsDeleted] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	async function fetchUsers(){
		try {
			const response = await fetch(`${apiURL}/users`);
			const usersData = await response.json();
			
			setUsers(usersData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchRecipes(){
		try {
			const response = await fetch(`${apiURL}/recipes`);
			const recipesData = await response.json();
			
			setRecipes(recipesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchSingleRecipe(id){
		try {
		  const response = await fetch(`${apiURL}/recipes/${id}`);
		  const recipe = await response.json();
		  setSingleViewRecipe(recipe);
		} catch (err) {
		  console.log("Oh no an error! ", err);
		}
	  }

	// useEffect(() => {
	// 	fetchUsers();
	// }, []);

	useEffect(() => {
		fetchRecipes();
	}, []);

	return (
		
		<main>	
	  <h1>Welcome to the Recipe Shop</h1>
	  {isUpdating ? (
	  	<UpdateRecipe props={singleViewRecipe} setIsUpdating={setIsUpdating} isUpdating={isUpdating} setSingleViewRecipe={setSingleViewRecipe}/>
	  ) : isAddingRecipe ? (
		<AddRecipe setIsAddingRecipe={setIsAddingRecipe}/>
	  ) : singleViewRecipe ? (
		<SingleViewRecipe props={singleViewRecipe} setSingleViewRecipe={setSingleViewRecipe} isDeleted={isDeleted} setIsDeleted={setIsDeleted} isUpdating={isUpdating} setIsUpdating={setIsUpdating}/> 
	  ) : (
			<div id="recipes"><RecipesList recipes={recipes} handleClick={fetchSingleRecipe} setIsAddingRecipe={setIsAddingRecipe}/></div>
	  )}
		</main>
	)
}