import React from "react";
import { Fade } from "react-reveal";
import styles from "./PrimaryButton.module.scss";
import Link from "gatsby-link";
const PrimaryButton = ({ isLink, linkTo, title }) => {
  return isLink ? (
    <a className={styles.primaryButton} href={linkTo}>
      {title}
    </a>
  ) : (
    <Link to={linkTo}>
      <button className={styles.primaryButton} type="button">
        {title}
      </button>
    </Link>
  );
};

export default PrimaryButton;
