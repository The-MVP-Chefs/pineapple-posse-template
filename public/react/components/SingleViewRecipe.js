import React from "react";
import apiURL from "../api";

export const SingleViewRecipe = ({props,setSingleViewRecipe, isDeleted, setIsDeleted, setIsUpdating}) => {
  async function handleDelete(ev) {
    const response = await fetch(`${apiURL}/recipes/${props.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setSingleViewRecipe(null);
    setIsDeleted(true);
    refreshPage();
  }

  function refreshPage() {
    window.location.reload(false);
  }
    return (
    <>
    <div class="fullRecipe">
      <div class="info"> <h3>{props.recipeName}</h3>
      <h2>${props.userId}</h2> </div>
      <div id="recipeImage"><img src={props.recipeImage} alt={props.name} /></div>
      <div id="desc"><p>Description: {props.ingredients}</p></div>
      <div id="cat"><p>Category: {props.isVegan}</p></div>
    </div>
      <button onClick={() => setSingleViewRecipe(null)} id="main">Back to Main Page</button>
      <button onClick={handleDelete} id="delete">Delete Recipe</button>
      <button onClick={() => setIsUpdating(true)} id="update">Update Recipe</button>
    </>
    );
};
