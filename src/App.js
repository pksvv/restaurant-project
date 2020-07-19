import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUser, faHome, faSearch, faPlusCircle, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Login from "./components/Login";
import Logout from "./components/Logout";
//import NavbarMenu from "./components/NavbarMenu";

function App() {
  return (
    <div className="App">
      <Router>
        {/*<NavbarMenu />*/}
        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route>
        <Route path="/details">
          <RestaurantDetails />
        </Route>
        <Route path="/update/:id"
          render={props => (
            <RestaurantUpdate {...props} />
          )}>
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        {/*  */}
        <Route path="/login"
          render={props => (
            <Login {...props} />
          )}>
        </Route>
        {/*  */}
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
