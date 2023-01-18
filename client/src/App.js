
import React from 'react'
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import AppNavbar from './components/Navbar';
import ErrorPage from './pages/404/404.js';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { MyContext } from './context';
import { useContext } from 'react';



function App() {
  const {user} = useContext(MyContext)
  return (
   
    <Router>
      
        <AppNavbar/>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {!user&&(
              <>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <Signup />
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
