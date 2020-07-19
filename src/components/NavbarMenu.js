import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUser, faHome, faSearch, faPlusCircle, faUtensils, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';

class NavbarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home"><Link to="/"><FontAwesomeIcon icon={faUtensils} /> Resto</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" defaultActiveKey="#home">
                            <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
                            <Nav.Link href="#create"><Link to="/create"><FontAwesomeIcon icon={faPlusCircle} /> Create</Link></Nav.Link>
                            <Nav.Link href="#list"><Link to="/list"><FontAwesomeIcon icon={faList} /> List</Link></Nav.Link>
                            {/*<Nav.Link href="#update"><Link to="/update"><FontAwesomeIcon icon={faPenSquare}/> Update</Link></Nav.Link>*/}
                            <Nav.Link href="#search"><Link to="/search"><FontAwesomeIcon icon={faSearch} /> Search</Link></Nav.Link>
                            {
                                localStorage.getItem('login') ?
                                <Nav.Link href="#logout"><Link to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></Nav.Link>
                                :
                                <Nav.Link href="#login"><Link to="/login"><FontAwesomeIcon icon={faUser} /> Login</Link></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarMenu;