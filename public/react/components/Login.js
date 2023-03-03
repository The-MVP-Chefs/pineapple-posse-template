import React, { useState } from "react";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = ({ setIsLoggedIn, setIsHome }) => {
  console.log("login");
  //make the form
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(ev) {
    console.log("testingLogin");
    // event.preventDefault();
    const response = await fetch(`${apiURL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name, password }),
    });
    const data = await response.json();
    setIsLoggedIn(null);
    refreshPage();
  }
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => setUserName(e.target.value)}
            value={user_name}
            type="text"
            placeholder="Username"
          />
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            placeholder="Enter Password"
          />{" "}
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => setIsHome(true)}>
          Cancel
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="primary"
          type="submit"
          onClick={(ev) => handleLogin(ev)}
        >
          Login
        </Button>
      </Form>
    </>
  );
};
