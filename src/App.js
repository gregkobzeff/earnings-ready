import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem, FormGroup, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import './App.css';
import logo from './images/logo.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
        <Navbar bg="light">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Earnings Ready logo"
              />
            </Link>      
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <LinkContainer to="/calendar">
              <Nav.Link>Calendar</Nav.Link>
            </LinkContainer>               
            <LinkContainer to="/heatmap">
              <Nav.Link>Heat Map</Nav.Link>
            </LinkContainer>               
            <LinkContainer to="/test">
              <Nav.Link>Test</Nav.Link>
            </LinkContainer>   
          </Nav>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  
  }

}

export default withRouter(App);
