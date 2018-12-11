import React from "react";
import "./assets/css/Normalize.css";
import "./assets/css/App.css";
import logo from "./assets/images/logo.gif";
import blue_logo from "./assets/images/blue_logo.png";
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
import Footer from "./components/Footer";
import ScrollToTop from "./containers/ScrollToTop";

import ExtraBorder from "./components/ExtraBorder";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newKey: new Date(),
      lastPath: ""
    };
  }
  componentWillMount() {
    this.setState({ lastPath: window.location.pathname });
  }
  renderMenu() {
    var path = this.state.lastPath;
    if (path !== "/") {
      return (
        <NavLink to="/">
          <img src={blue_logo} alt="Wildflower PR Logo" className="menu-logo" />
        </NavLink>
      );
    }
  }

  renderBackground() {
    var path = this.state.lastPath;
    if (path == "/") {
      return { backgroundImage: "url(" + Background + ")" };
    } else {
      return { background: "white" };
    }
  }
  renderExtraBorder() {
    var path = this.state.lastPath;
    if (path !== "/") {
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
                  render={state => {
                    // seems ok ?
                    this.updateDate();
                    return <Team match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/"
                  render={state => {
                    // seems ok ?
                    this.updateDate();
                    return <Home match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/style"
                  render={state => {
                    // seems ok ?
                    this.updateDate();
                    return <Style match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/clients"
                  render={state => {
                    // seems ok ?
                    this.updateDate();
                    return <Clients match={state.match} />;
                  }}
                />
                <Route
                  exact
                  path="/press"
                  render={state => {
                    // seems ok ?
                    this.updateDate();
                    return <Press match={state.match} />;
                  }}
                  exact
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
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
