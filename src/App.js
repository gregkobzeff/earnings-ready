import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SymbolSelector from "./components/SymbolSelector";
import Routes from "./Routes";
import './App.css';
import logo from './images/logo.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      symbol: null
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleSearch = async event => {
    event.preventDefault();
    if (this.state.symbol == null) return; //no valid selection
    this.props.history.push(`/stocks/${this.state.symbol}`);
  }

  handleSymbolKeyDown = async event => {
    if (event.key === "Enter") {
      this.handleSearch(event);
    }
  }

  handleSymbolChange = selected => {
    this.setState({
      symbol: selected[0]
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
            <Form inline>
              <SymbolSelector placeholder="Enter a symbol" onChange={this.handleSymbolChange} onKeyDown={this.handleSymbolKeyDown} />
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

