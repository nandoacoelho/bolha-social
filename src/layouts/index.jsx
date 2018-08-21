import React, { Component } from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import NavigationResults from "../components/NavigationResults/NavigationResults";
import SEO from "../components/SEO/SEO";
import "../utils/emma.scss";

import favicon from "./favicon.png";
import appleTouchIcon from "./apple-touch-icon.png";

class MainLayout extends Component {
  constructor() {
    super();
    this.state = {
      isResults: window.location.pathname === "/results/"
    };
  }

  componentDidMount() {
    console.log("eita");
    window.onhashchange = () => {
      this.setState({
        isResults: window.location.pathname === "/results/"
      });
    };
  }

  render() {
    const { children } = this.props;
    const { isResults } = this.state;
    console.log("isResults", isResults);
    return (
      <React.Fragment>
        <Helmet>
          <link rel="shortcut icon" href={favicon} />
          <link rel="apple-touch-icon" href={appleTouchIcon} />
        </Helmet>
        <SEO />
        {window.location.pathname === "/results/" ? (
          <NavigationResults />
        ) : (
          <Navigation />
        )}
        {children()}
      </React.Fragment>
    );
  }
}

export default MainLayout;
