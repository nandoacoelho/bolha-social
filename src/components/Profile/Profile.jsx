import React from "react";
import styles from "./Profile.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Profile = ({ image, text, name, linkedin }) => (
  <div className={styles.profile}>
    <img src={image} />
    <h2 className={styles.name}>{name}</h2>
    <p className={styles.text}>{text}</p>
    <PrimaryButton />
  </div>
);

export default Profile;
