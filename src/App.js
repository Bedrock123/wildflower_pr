import React from "react";
import "./assets/css/Normalize.css";
import "./assets/css/App.css";
import logo from "./assets/images/logo.gif";
import blue_logo from "./assets/images/blue_logo.png";
import blue_fuzz from "./assets/images/blue_fuz.png";
import white_logo from "./assets/images/white_logo.png";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Team from "./containers/Team";
import Clients from "./containers/Clients";
import Press from "./containers/Press";
import PressClientOnly from "./containers/PressClientOnly";
import Style from "./containers/Style";
import Background from "../src/assets/images/background_v1.png";
import { NavLink } from "react-router-dom";
import FullNavigation from "./components/FullNavigation";
import JoinOurTeam from "./containers/JoinOurTeam";
import AboutUs from "./containers/AboutUs";
import TeamDescription from "./containers/TeamDescription";
import Footer from "./components/Footer";
import ScrollToTop from "./containers/ScrollToTop";

import ExtraBorder from "./components/ExtraBorder";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newKey: new Date(),
      lastPath: "",
    };
  }
  componentWillMount() {
    this.setState({ lastPath: window.location.pathname });
  }
  renderMenu() {
    var path = this.state.lastPath;
    if (path == "/about-us" || path === "/about-the-team") {
      return (
        <NavLink to="/">
          <img
            src={white_logo}
            alt="Wldflwr PR Logo"
            className="menu-logo  menu-logo-abs"
          />
        </NavLink>
      );
    }
    if (path !== "/") {
      return (
        <NavLink to="/">
          <img src={blue_logo} alt="Wldflwr PR Logo" className="menu-logo" />
        </NavLink>
      );
    }
  }

  renderBackground() {
    var path = this.state.lastPath;
    if (path == "/") {
      return { backgroundImage: "url(" + Background + ")" };
    } else if (path == "/about-us") {
      return { backgroundImage: "url(" + blue_fuzz + ")" };
    } else if (path == "/about-the-team") {
      return { background: "#f6cd68" };
    } else {
      return { background: "white" };
    }
  }
  renderExtraBorder() {
    var path = this.state.lastPath;
    if (path !== "/" && path !== "/about-us" && path !== "/about-the-team") {
      return <ExtraBorder />;
    }
  }
  updateDate() {
    console.log("hi");
    if (this.state.lastPath !== window.location.pathname) {
      this.setState({ lastPath: window.location.pathname });
    }
    console.log(this.state.lastPath);
  }
  renderFooter() {
    var path = this.state.lastPath;
    if (path !== "/" && path !== "/about-us" && path !== "/about-the-team") {
      return <Footer />;
    }
  }

  render() {
    return (
      <BrowserRouter onUpdate={() => alert("hi")}>
        <ScrollToTop>
          <div className="global-container" style={this.renderBackground()}>
            {this.renderMenu()}

            <FullNavigation />
            <div className="content-wrapper">
              <Switch>
                <Route
                  exact
                  path="/team"
                  render={(state) => {
                    // seems ok ?
                    this.updateDate();
                    return <Team match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/about-the-team"
                  render={(state) => {
                    // seems ok ?
                    this.updateDate();
                    return <TeamDescription match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/"
                  render={(state) => {
                    // seems ok ?
                    this.updateDate();
                    return <Home match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/about-us"
                  render={(state) => {
                    // seems ok ?
                    this.updateDate();
                    return <AboutUs match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/direction"
                  render={(state) => {
                    // seems ok ?
                    this.updateDate();
                    return <Style match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/clients"
                  render={(state) => {
                    // seems ok ?
                    this.updateDate();
                    return <Clients match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/press"
                  render={(state) => {
                    // seems ok ?
                    this.updateDate();
                    return <Press match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/press/:clientName"
                  component={PressClientOnly}
                />
                <Route exact path="/press" component={Press} />
                <Route exact path="/join-our-team" component={JoinOurTeam} />
              </Switch>
            </div>
            {this.renderExtraBorder()}
          </div>
          {this.renderFooter()}
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
