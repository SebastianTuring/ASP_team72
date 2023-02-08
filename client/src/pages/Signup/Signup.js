import axios from "axios"
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MyContext } from '../../context';
import { useContext } from 'react';
function Signup() 
{

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {setUser} =useContext(MyContext);
  
  function handleSignup(e)
  { 
    e.preventDefault();
    if(!email || !password)
    {
      return alert("please fill out the fields");
    }
    axios
      .post("http://localhost:5000/users",{email,password})
      .then(({ data })=>{
        setUser(data);
        localStorage.setItem("token",data.token);
    })
    .catch((err) => console.log(err));
  }


  return (
    <Form onSubmit={handleSignup}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}required/>
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
  );
}

export default Signup