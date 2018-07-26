import React from "react";
import "./assets/css/Normalize.css";
import "./assets/css/App.css";
import logo from "./assets/images/logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./containers/Home";
import Team from "./containers/Team";
import Clients from "./containers/Clients";
import Press from "./containers/Press";
import PressClientOnly from "./containers/PressClientOnly";
import Style from "./containers/Style";
import { NavLink } from "react-router-dom";
import FullNavigation from "./components/FullNavigation";
import JoinOurTeam from "./containers/JoinOurTeam";
import Footer from "./components/Footer";
import ScrollToTop from "./containers/ScrollToTop";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./containers/AnimatedSwitch";
import ExtraBorder from "./components/ExtraBorder";
class App extends React.Component {
  state = {
    newKey: new Date()
  };

  render() {
    document.getElementById("body").onclick = function(e) {
      this.setState({ newKey: new Date() });
    }.bind(this);

    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <ScrollToTop>
            <div className="global-container">
              <NavLink to="/">
                <img
                  src={logo}
                  alt="Wildflower PR Logo"
                  className="menu-logo"
                />
              </NavLink>
              <FullNavigation />
              <div className="content-wrapper">
                <Route
                  render={({ location }) => (
                    <TransitionGroup component="main">
                      <AnimatedSwitch key={location.key} location={location}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/style" component={Style} />
                        <Route exact path="/team" component={Team} />
                        <Route exact path="/clients" component={Clients} />
                        <Route exact path="/press" component={Press} exact />
                        <Route exact path="/press/:clientName" component={PressClientOnly} />
                        <Route exact path="/press" component={Press} />
                        <Route exact path="/join-our-team" component={JoinOurTeam} />
                      </AnimatedSwitch>
                    </TransitionGroup>
                  )}
                />
              </div>
            </div>
            <ExtraBorder />
            <Footer />
          </ScrollToTop>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
