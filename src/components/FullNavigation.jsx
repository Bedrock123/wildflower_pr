import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

var classNames = require("classnames");

class FullNavigation extends React.Component {
  state = {
    styleBarExposed: false,
    pressBarExposed: false,
    teamBarExposed: false,
    clientsBarExposed: false,
    styleBarUrlActivate: false,
    pressBarUrlActivate: false,
    teamBarUrlActivate: false,
    clientsBarUrlActivate: false
  };
  componentWillReceiveProps(nextProps) {
    let activeOpenKey = `${nextProps.location.pathname.split("/")[1]}`;
    activeOpenKey = activeOpenKey + "BarUrlActivate";
    this.setState({
      styleBarUrlActivate: false,
      pressBarUrlActivate: false,
      teamBarUrlActivate: false,
      clientsBarUrlActivate: false
    });
    this.setState({ [activeOpenKey]: true });
  }
  changeStyleBarState(barName) {
    this.setState({ styleBarExposed: !this.state.styleBarExposed });
  }
  changePressBarState(barName) {
    this.setState({ pressBarExposed: !this.state.pressBarExposed });
  }
  changeTeamBarState(barName) {
    this.setState({ teamBarExposed: !this.state.teamBarExposed });
  }
  changeClientsBarState(barName) {
    this.setState({ clientsBarExposed: !this.state.clientsBarExposed });
  }
  render() {
    return (
      <div className="menu-frame">
        <div className="menu-frame-inner">
          <NavLink
            activeClassName="active"
            to="/style"
            className="four-corner-link style-link"
            onMouseEnter={this.changeStyleBarState.bind(this)}
            onMouseLeave={this.changeStyleBarState.bind(this)}
          >
            style
          </NavLink>
          {this.state.styleBarExposed || this.state.styleBarUrlActivate ? (
            <div className="bottom-bar style-bottom-bar" />
          ) : null}
          <a
            href="#"
            className="four-corner-link press-link"
            onMouseEnter={this.changePressBarState.bind(this)}
            onMouseLeave={this.changePressBarState.bind(this)}
          >
            press
          </a>
          {this.state.pressBarExposed ? (
            <div className="bottom-bar press-bottom-bar" />
          ) : null}
          <a
            href="#"
            className="four-corner-link team-link"
            onMouseEnter={this.changeTeamBarState.bind(this)}
            onMouseLeave={this.changeTeamBarState.bind(this)}
          >
            team
          </a>
          {this.state.teamBarExposed ? (
            <div className="bottom-bar team-bottom-bar" />
          ) : null}
          <a
            href="#"
            className="four-corner-link clients-link"
            onMouseEnter={this.changeClientsBarState.bind(this)}
            onMouseLeave={this.changeClientsBarState.bind(this)}
          >
            clients
          </a>
          {this.state.clientsBarExposed ? (
            <div className="bottom-bar clients-bottom-bar" />
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(FullNavigation);
