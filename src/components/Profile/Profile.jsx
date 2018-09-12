import React from "react";
import styles from "./Profile.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import linkedinIcon from "../../assets/images/icon-linkedin.png";

const Profile = ({ image, text, name, linkedin }) => (
  <div className={styles.profile}>
    <img src={image} />
    <h2 className={styles.name}>{name}</h2>
    <p className={styles.text}>{text}</p>
    <div className={styles.buttonWrapper}>
      <PrimaryButton
        isLink
        title="linkedin"
        icon={linkedinIcon}
        linkTo={linkedin}
      />
    </div>
  </div>
);

export default Profile;
