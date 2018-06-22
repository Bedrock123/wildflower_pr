import React from "react";
import "./assets/css/Normalize.css";
import "./assets/css/App.css";
import logo from "./assets/images/logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./containers/Home";
import FullNavigation from "./components/FullNavigation";
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
              <a href="#">
                <img
                  src={logo}
                  alt="Wildflower PR Logo"
                  className="menu-logo"
                />
              </a>
              <FullNavigation />
              <div className="content-wrapper">
                <Route
                  render={({ location }) => (
                    <TransitionGroup component="main">
                      <AnimatedSwitch key={location.key} location={location}>
                        <Route exact path="/" component={Home} />
                      </AnimatedSwitch>
                    </TransitionGroup>
                  )}
                />
              </div>
            </div>
            <ExtraBorder />
          </ScrollToTop>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
