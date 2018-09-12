import React from "react";
import styles from "./Footer.module.scss";
import config from "../../../config/SiteConfig";

const Footer = () => (
  <footer className={styles.footer}>
    {config.copyright} <a href="http://bolhasocial.com">Bolha Social</a>{" "}
    {" - Todos os direitos reservados - "} <a href="https://ufrj.br">UFRJ</a>.
  </footer>
);

export default Footer;
