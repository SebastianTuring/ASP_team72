import axios from "axios"
import React, { useState, useContext } from 'react'
import { MyContext } from '../../context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import { Auth } from 'aws-amplify';

import { useHistory } from "react-router-dom"



function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(MyContext);

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      return alert('please fill out the fields')
    }
    try {
      const username = email
      const user = await Auth.signIn(username, password);
      console.log(user);
      // localStorage.setItem("token", data.token);
      setUser(user);
      history.replace("/")
    } catch (error) {
      console.log('error signing in', error);
    }
  }
  // function handleLogin(e) {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     return alert('please fill out the fields')
  //   }
  //   axios
  //     .post("http://localhost:5000/login", { email, password })
  //     .then(({ data }) => {
  //       localStorage.setItem("token", data.token);
  //       setUser(data);
  //       history.replace("/")
  //     })
  //     .catch((err) => console.log(err));
  //   alert("You are logged in")
  // }

  return (
    <div class="mainLogin">
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login