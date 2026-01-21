import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Dock from "react-dock";
var classNames = require("classnames");

class FullNavigation extends React.Component {
  state = {
    styleBarExposed: false,
    pressBarExposed: false,
    teamBarExposed: false,
    clientsBarExposed: false,
    directionBarUrlActivate: false,
    pressBarUrlActivate: false,
    teamBarUrlActivate: false,
    clientsBarUrlActivate: false,
    isVisible: false,
  };
  componentWillMount() {
    let activeOpenKey = `${this.props.location.pathname.split("/")[1]}`;
    activeOpenKey = activeOpenKey + "BarUrlActivate";
    this.setState({
      directionBarUrlActivate: false,
      pressBarUrlActivate: false,
      teamBarUrlActivate: false,
      clientsBarUrlActivate: false,
    });
    this.setState({
      [activeOpenKey]: true,
    });
  }
  componentWillReceiveProps(nextProps) {
    let oldOpenKey = `${this.props.location.pathname.split("/")[1]}`;
    let activeOpenKey = `${nextProps.location.pathname.split("/")[1]}`;
    activeOpenKey = activeOpenKey + "BarUrlActivate";
    this.setState({
      directionBarUrlActivate: false,
      pressBarUrlActivate: false,
      teamBarUrlActivate: false,
      clientsBarUrlActivate: false,
    });
    this.setState({
      [activeOpenKey]: true,
    });
    if (oldOpenKey !== activeOpenKey) {
      this.setState({
        isVisible: false,
      });
    }
  }
  changeStyleBarState(barName) {
    this.setState({
      styleBarExposed: !this.state.styleBarExposed,
    });
  }
  changePressBarState(barName) {
    this.setState({
      pressBarExposed: !this.state.pressBarExposed,
    });
  }
  changeTeamBarState(barName) {
    this.setState({
      teamBarExposed: !this.state.teamBarExposed,
    });
  }
  changeClientsBarState(barName) {
    this.setState({
      clientsBarExposed: !this.state.clientsBarExposed,
    });
  }
  renderBottomBarClasses(ifDisplay) {
    if (ifDisplay) {
      return "bottom-bar bottom-bar-active";
    } else {
      return "bottom-bar";
    }
  }
  render() {
    return (
      <div className="menu-frame">
        <div className="menu-frame-inner">
          <NavLink
            activeClassName="active"
            to="/direction"
            className="four-corner-link style-link"
            onMouseEnter={this.changeStyleBarState.bind(this)}
            onMouseLeave={this.changeStyleBarState.bind(this)}
          >
            direction{" "}
            <div
              className={this.renderBottomBarClasses(
                this.state.styleBarExposed ||
                  this.state.directionBarUrlActivate,
              )}
            />
          </NavLink>{" "}
          <NavLink
            activeClassName="active"
            to="/clients"
            className="four-corner-link press-link"
            onMouseEnter={this.changeClientsBarState.bind(this)}
            onMouseLeave={this.changeClientsBarState.bind(this)}
          >
            clients
            <div
              className={this.renderBottomBarClasses(
                this.state.clientsBarExposed ||
                  this.state.clientsBarUrlActivate,
              )}
            />
          </NavLink>{" "}
        </div>{" "}
        <i
          className="fas fa-bars menu-icon "
          onClick={() =>
            this.setState({
              isVisible: !this.state.isVisible,
            })
          }
        />{" "}
        <Dock
          position="right"
          fluid={false}
          dockStyle={{ background: "#fffef1" }}
          isVisible={this.state.isVisible}
          dimStyle={{ background: "rgba(0, 0, 0, 0.45)" }}
          size={300}
        >
          <div className="dock-inner-container">
            <div onClick={() => this.setState({ isVisible: false })}>
              <i className="fas fa-times close-icon" />
            </div>{" "}
            <div className="link-container mobile-link-container">
              <NavLink
                activeClassName="active"
                to="/"
                exact
                className="four-corner-link "
                onMouseEnter={this.changeStyleBarState.bind(this)}
                onMouseLeave={this.changeStyleBarState.bind(this)}
              >
                home{" "}
              </NavLink>{" "}
              <br />
              <NavLink
                activeClassName="active"
                to="/direction"
                className="four-corner-link "
                onMouseEnter={this.changeStyleBarState.bind(this)}
                onMouseLeave={this.changeStyleBarState.bind(this)}
              >
                direction{" "}
              </NavLink>{" "}
              <br />
              <NavLink
                activeClassName="active"
                to="/press"
                className="four-corner-link "
                onMouseEnter={this.changeStyleBarState.bind(this)}
                onMouseLeave={this.changeStyleBarState.bind(this)}
              >
                press{" "}
              </NavLink>{" "}
              <br />
              <NavLink
                activeClassName="active"
                to="/team"
                className="four-corner-link "
                onMouseEnter={this.changeStyleBarState.bind(this)}
                onMouseLeave={this.changeStyleBarState.bind(this)}
              >
                team{" "}
              </NavLink>{" "}
              <br />
              <NavLink
                activeClassName="active"
                to="/clients"
                className="four-corner-link "
                onMouseEnter={this.changeStyleBarState.bind(this)}
                onMouseLeave={this.changeStyleBarState.bind(this)}
              >
                clients
              </NavLink>
            </div>{" "}
          </div>{" "}
        </Dock>{" "}
      </div>
    );
  }
}

export default withRouter(FullNavigation);
