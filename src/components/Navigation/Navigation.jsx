import React, { Component } from "react";
import Link from "gatsby-link";
import Headroom from "react-headroom";
import { slide as Menu } from "react-burger-menu";
import config from "../../../config/SiteConfig";
import styles from "./Navigation.module.scss";
import "./Headroom.scss";
import logo from "../../assets/images/logo.png";

export default class Navigation extends Component {
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
        <Headroom calcHeightOnResize disableInlineStyles>
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

            <nav className={styles.navigation}>
              <span>
                <Link to="/" activeClassName="active">
                  sua bolha
                </Link>
                <Link to="/team" activeClassName="active">
                  equipe
                </Link>
                {/*<Link to="/what" activeClassName="active">
                  o que é
                </Link>
                <Link to="/share" activeClassName="active">
                  compartilhe
                </Link>
                <Link to="/contact" activeClassName="active">
                  contato
                </Link> */}
              </span>
            </nav>
          </div>
        </Headroom>
        <div className={styles.mobileNav}>
          <div className={styles.mobileNavName}>
            <img
              className={styles.logo}
              width="80px"
              src={logo}
              alt={config.siteTitle}
            />
          </div>
          <div className={styles.menu}>
            <Menu
              isOpen={this.state.menuOpen}
              onStateChange={this.handleStateChange}
              width="100%">
              <Link to="/" onClick={() => this.closeMenu()}>
                <h1>{config.siteTitle}</h1>
              </Link>
              <Link
                to="/team"
                activeClassName="active"
                onClick={() => this.closeMenu()}>
                equipe
              </Link>
              {/*<Link
                to="/"
                activeClassName="active"
                onClick={() => this.closeMenu()}
              >
                sua bolha
              </Link>
              <Link
                to="/what"
                activeClassName="active"
                onClick={() => this.closeMenu()}
              >
                o que é
              </Link>
              <Link
                to="/share"
                activeClassName="active"
                onClick={() => this.closeMenu()}
              >
                compartilhe
              </Link>
              <Link
                to="/contact"
                activeClassName="active"
                onClick={() => this.closeMenu()}
              >
                contato
              </Link>
            */}
            </Menu>
          </div>
        </div>
      </header>
    );
  }
}
