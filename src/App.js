import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
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

  blockSubmit = async event => {
    event.preventDefault();
  }

  handleSearch = async event => {
    event.preventDefault();
    this.props.history.push(`/stocks/${this.state.txtSearch}`);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
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
            <LinkContainer to="/overview">
              <Nav.Link>Overview</Nav.Link>
            </LinkContainer>
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
          <Nav className="ml-auto">
            <Form inline onSubmit={this.blockSubmit}>
              <FormControl id="txtSearch" type="text" placeholder="Enter a symbol" onChange={this.handleChange} />
              <Button className="search" onClick={this.handleSearch}>Search</Button>
            </Form>
          </Nav>
        </Navbar>

        <Routes childProps={childProps} />
      </div>
    );

  }

}

export default withRouter(App);

