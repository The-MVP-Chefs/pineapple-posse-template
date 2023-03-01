import React, {useState} from 'react';
import apiURL from '../api';

export const AddRecipe = ({props, setIsAddingRecipe}) => {
//make the form
const [recipeName, setRecipe] = useState('');
const [userId, setUserId] = useState('');
//const [id, setId] = useState('');
const [ingredients, setIngredients] = useState('');
const [isVegan, setIsVegan] = useState('');
const [recipeImage, setRecipeImage] = useState('');   

async function handleSubmit(ev) {
    //event.preventDefault();
    const response = await fetch(`${apiURL}/recipes/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {recipeName, userId, ingredients, isVegan, recipeImage}
      )
    });

    const data = await response.json();
    setIsAddingRecipe(null);
    refreshPage();
  }

  function refreshPage() {
    window.location.reload(false);
  }
    
    return  ( <>
    <div id="h2"><h2>Add a Recipe</h2></div>
     <form>
    <label>
        <p>
        <input type="text" size='50' name="recipeName" placeholder="Recipe Name" value={ recipeName } onChange={ev => setRecipe(ev.target.value)} /> 
        </p>
        <p>
        <input type="text" size='50' name="userId" placeholder="User Id" value={ userId } onChange={ev => setUserId(ev.target.value)}/> 
        </p>
        <p>
        <input type="text"  size='50' name="ingredients" placeholder="Ingredients" value={ ingredients } onChange={ev => setIngredients(ev.target.value)}/> 
        </p>
        <p>
        <input type="text" size='50' name="isVegan" placeholder="Vegan?" value={ isVegan } onChange={ev => setIsVegan(ev.target.value)}/> 
        </p>
        <p>
        <input type="text" size='50' name="recipeImage"  placeholder="Image" value={ recipeImage } onChange={ev => setRecipeImage(ev.target.value)}/>
        </p> 
    </label>
    </form>
    <div id="buttons">
    <button type="submit" onClick={handleSubmit} id="add">Add My Recipe!</button>
    <button onClick={() => setIsAddingRecipe(false)} id="back">Back to Home</button>
      </div>
    </>
    );
}