import React from "react";
import { Fade } from "react-reveal";
import styles from "./ShareHero.module.scss";
import heroImage from "../../assets/images/hero-share.png";
import facebook from "../../assets/images/icon-facebook.png";
import twitter from "../../assets/images/icon-twitter.png";
import linkedin from "../../assets/images/icon-linkedin.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
const ShareHero = () => (
  <div className={styles.wrapper}>
    <img className={styles.heroImage} src={heroImage} />
    <div className={styles.heroText}>
      <h2>Compartilhe!</h2>
      <div className={styles.buttonWrapper}>
        <PrimaryButton
          isLink
          title="linkedin"
          icon={linkedin}
          linkTo="https://chrome.google.com/webstore/detail/kallcfbeikglpoaapgfldobcfkgdcfle/"
        />
        <PrimaryButton
          isLink
          title="facebook"
          icon={facebook}
          linkTo="https://chrome.google.com/webstore/detail/kallcfbeikglpoaapgfldobcfkgdcfle/"
        />
        <PrimaryButton
          isLink
          title="twitter"
          icon={twitter}
          linkTo="https://chrome.google.com/webstore/detail/kallcfbeikglpoaapgfldobcfkgdcfle/"
        />
      </div>
    </div>
  </div>
);

export default ShareHero;
