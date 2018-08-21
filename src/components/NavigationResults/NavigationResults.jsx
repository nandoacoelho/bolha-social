import React, { Component } from "react";
import Link from "gatsby-link";
import config from "../../../config/SiteConfig";
import styles from "./NavigationResults.module.scss";
import logo from "../../assets/images/logo.png";

export default class NavigationResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.name}>
            <span>
              <Link to="/">
                <img
                  className={styles.logo}
                  width="80px"
                  src={logo}
                  alt={config.siteTitle}
                />
              </Link>
            </span>
          </div>
        </div>
      </header>
    );
  }
}
