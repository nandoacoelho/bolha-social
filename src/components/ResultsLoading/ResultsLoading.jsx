import React, { Component } from "react";
import styles from "./ResultsLoading.module.scss";
import logo from "../../assets/images/logo-loading.svg";

class ResultsLoading extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.circle} />
        <div className={styles.logoText}>
          <img className={styles.logo} src={logo} />
          <p className={styles.text}>Carregando...</p>
        </div>
      </div>
    );
  }
}

export default ResultsLoading;
