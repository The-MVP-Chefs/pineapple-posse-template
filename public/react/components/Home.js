//will be a form with login and password. On click will load use home screen. 
import React, {useState} from 'react';
import apiURL from '../api';
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


export const Home = ({props, setIsHome}) => {


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
        setIsHome(false);
        refreshPage();
      }



  function refreshPage() {
    window.location.reload(false);
  }
    
    return  ( <>

    <img src="https://64.media.tumblr.com/247e7fcb54fb8ffde594fc428b047a97/3cfa81015891537b-61/s400x600/a7914e7fd605022b6deb3c60d8a4c5c400dbeeae.jpg"/>
   
    <br></br>
      
      <Button variant="success" type="submit" onClick={handleSubmit}>
        View Public Recipes
      </Button>
      <br></br>

      <Button variant="primary" type="submit" onClick={() => setIsLoggedIn(true)&& setIsHome(false)}>
        Login
      </Button>
      <br></br>

      <Button variant="warning" type="submit" onClick={() => setIsRegistered(true)&& setIsHome(false)}>
        Register Account
      </Button>
    
    </>
    );

    }