import axios from "axios"
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MyContext } from '../../context';
import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import './style.css'
import { Auth } from 'aws-amplify';

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(MyContext);

  // function handleSignup(e)
  // { 
  //   e.preventDefault();
  //   if(!email || !password)
  //   {
  //     return alert("please fill out the fields");
  //   }
  //   axios
  //     .post("http://localhost:5000/users",{email,password})
  //     .then(({ data })=>{
  //       setUser(data)
  //       localStorage.setItem("token",data.token);
  //       history.replace("/users")
  //   })
  //   .catch((err) => console.log(err));
  //   alert("You are signed in, Please log in to continue")
  // }
  async function confirmSignUp(code) {
    try {
      const username = email
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
  async function handleSignup(e) {
    try {
      e.preventDefault();
      if (!email || !password) {
        return alert("please fill out the fields");
      }
      const username = email
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      });
      console.log(user);
      setUser(user)
      const code = prompt('Please enter verification code')
      await confirmSignUp(code)
      // localStorage.setItem("token", data.token);
      history.replace("/users")
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  return (
    <div class="mainSignup">
      <h1>Sign Up</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup