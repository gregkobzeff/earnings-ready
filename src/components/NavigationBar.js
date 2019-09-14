import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, withRouter } from "react-router-dom";
import SymbolSelector from "./SymbolSelector";
import logo from "../images/logo.png";
import "./NavigationBar.css";

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.refSymbolSelector = React.createRef();
    this.state = {
      symbol: null
    };
  }

  handleSearch = async event => {
    event.preventDefault();
    if (this.state.symbol == null) return; //no valid selection
    this.refSymbolSelector.current.clear();
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

  handleSettings = async event => {
    event.preventDefault();
    this.props.history.push("/settings");
  }

  handleSignOut = async event => {
    event.preventDefault();
    this.props.security.handleSignOut();
  }

  render() {
    return (
      <Navbar bg="light" className="navigation-bar">
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
          <LinkContainer to="/trends">
            <Nav.Link>Trends</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/calendar">
            <Nav.Link>Calendar</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/watchlist">
            <Nav.Link>WatchList</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/heatmap">
            <Nav.Link>HeatMap</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/compare">
            <Nav.Link>Compare</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/test">
            <Nav.Link>Test</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="ml-auto">
          {this.props.security.isSignedIn
            ?
            <NavDropdown title="Account">
              <NavDropdown.Item className="account-item" onClick={this.handleSettings}>
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item className="account-item" onClick={this.handleSignOut}>
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
            : <>
              <LinkContainer to="/signin">
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup" className="btn sign-up-link">
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
            </>
          }
          <Form inline>
            <SymbolSelector
              ref={this.refSymbolSelector}
              placeholder="Enter a symbol"
              onChange={this.handleSymbolChange}
              onKeyDown={this.handleSymbolKeyDown} />
            <Button
              className="search"
              onClick={this.handleSearch}>Search</Button>
          </Form>
        </Nav>
      </Navbar>
    );
  }

}

export default withRouter(NavigationBar);