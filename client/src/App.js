// import { useEffect } from 'react';
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import AppNavbar from './components/Navbar';
import ErrorPage from './pages/404/404.js';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import Recipe from './pages/Recipe';

import About_us from './pages/About_Us/About_Us';

import { MyContext } from './context';
import { useContext } from 'react';

import "./fonts/Montserrat-Bold.ttf"
import "./fonts/Poppins/Poppins-Black.ttf"
import "./fonts/CantataOne-Regular.ttf"
// import axios from 'axios';


function App() {
  const { user } = useContext(MyContext);
  // useEffect(() =>{
  //   axios.post("/auto-login").then(({data})=>setUser(data));
  // }, []);
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {!user && (
          <>
            <Route exact path="/login">
              <Login />
            </Route>
            
            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/recipe">
              <Recipe />
            </Route>
            
            <Route exact path="/about_Us">
              <About_us />
            </Route>
          </>
        )}

        <Route>
          <ErrorPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
