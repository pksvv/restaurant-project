import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList,faUser,faHome, faSearch,faPlusCircle,faUtensils} from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home"><Link to="/"><FontAwesomeIcon icon={faUtensils}/> Resto</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" defaultActiveKey="#home">
              <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link></Nav.Link>
              <Nav.Link href="#create"><Link to="/create"><FontAwesomeIcon icon={faPlusCircle}/> Create</Link></Nav.Link>
              <Nav.Link href="#list"><Link to="/list"><FontAwesomeIcon icon={faList}/> List</Link></Nav.Link>
              {/*<Nav.Link href="#update"><Link to="/update"><FontAwesomeIcon icon={faPenSquare}/> Update</Link></Nav.Link>*/}
              <Nav.Link href="#search"><Link to="/search"><FontAwesomeIcon icon={faSearch}/> Search</Link></Nav.Link>
              <Nav.Link href="#login"><Link to="/login"><FontAwesomeIcon icon={faUser}/> Login</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
