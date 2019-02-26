import React from "react";
import { Fade } from "react-reveal";
import styles from "./PrimaryButton.module.scss";
import Link from "gatsby-link";
const PrimaryButton = ({
  isLink = false,
  isSubmit = false,
  linkTo,
  title,
  isActive,
  icon
}) => {
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
    <button
      className={`${styles.primaryButton} ${isActive ? styles.active : ""}`}
      type={isSubmit ? "submit" : "button"}>
      {title}
    </button>
  );
};

export default PrimaryButton;
