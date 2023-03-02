//will be a form with login and password. On click will load use home screen. 
import React, {useState} from 'react';
import apiURL from '../api';
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Login = ({props, setIsLoggedIn}) => {
//make the form
const [user_name, setUserName] = useState('');
const [password, setPassword] = useState('');
 

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
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control onChange={(e) => setUser(e.target.value)} value={user_name} type="text" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setUser(e.target.value)} value={password} type="text" placeholder="Enter Password" />
      </Form.Group>

      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
    </>
    );
}

