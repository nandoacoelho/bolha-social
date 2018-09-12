import React from "react";
import { Fade } from "react-reveal";
import styles from "./PrimaryButton.module.scss";
import Link from "gatsby-link";
const PrimaryButton = ({ isLink, linkTo, title, isActive, icon }) => {
  return isLink ? (
    <a
      className={`${styles.primaryButton} ${isActive ? styles.active : ""}${
        icon ? styles.buttonIcon : ""
      }`}
      href={linkTo}
      target="_blank">
      {title}
      {icon && (
        <div className={styles.icon}>
          <img src={icon} />
        </div>
      )}
    </a>
  ) : (
    <Link to={linkTo}>
      <button
        className={`${styles.primaryButton} ${isActive ? styles.active : ""}`}
        type="button">
        {title}
      </button>
    </Link>
  );
};

export default PrimaryButton;
