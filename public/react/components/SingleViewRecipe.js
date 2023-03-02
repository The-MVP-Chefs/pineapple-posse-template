import React from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

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
    {/* <div class="fullRecipe">
      <div class="info"> <h3>{props.recipeName}</h3>
       </div>
      <div id="recipeImage"><img src={props.recipeImage} alt={props.name} /></div>
      <div id="desc"><p>Ingredients: {props.ingredients}</p></div>
      <div id="cat"><p>Vegan: {props.isVegan}</p></div>
    </div>
      <button onClick={() => setSingleViewRecipe(null)} id="main">Back to Main Page</button>
      <button onClick={handleDelete} id="delete">Delete Recipe</button>
      <button onClick={() => setIsUpdating(true)} id="update">Update Recipe</button> */}
        <Card style={{ width: "18rem" }}>
           <Card.Img variant="top" src={props.recipeImage} />
           <Card.Body>
             <Card.Title>{<recipe className="recipeName"></recipe>}</Card.Title>
             <Card.Text>{props.ingredients}</Card.Text>
          </Card.Body>
           <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.isVegan}</ListGroup.Item>
            <ListGroup.Item>User Id{props.userId}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button onClick={handleDelete} variant="danger">
               Delete
             </Button>
             <br></br>
             <Button variant="success" onClick={()=>setIsUpdating(true)}>Update</Button>
           </Card.Body>
         </Card>

           <Button variant="primary" onClick={() => setSingleViewRecipe(null)}>
             Back to All Items
           </Button>
    </>
    );
};
