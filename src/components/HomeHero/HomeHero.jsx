import React from "react";
import { Fade } from "react-reveal";
import styles from "./HomeHero.module.scss";
import heroImage from "../../assets/images/hero.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
const HomeHero = () => (
  <div className={styles.wrapper}>
    <Fade down />
    <img className={styles.heroImage} src={heroImage} />
    <div className={styles.heroText}>
      <h2>Qual é a sua bolha?</h2>
      <p className={styles.body}>
        As grandes empresas sabem tudo sobre você. O que você compra, o que você
        gosta de comer, se vai à academia, qual sua banda favorita, sua cor
        favorita... Existem muitos dados sobre você na rede e eles não são
        aparentes. Por isso essa iniciativa foi criada!
      </p>
      <p className={styles.body}>
        Quer descobrir qual é a sua bolha e como você usa a internet? Instale a
        extensão e tenha acesso aos seus próprios dados.
      </p>
      <PrimaryButton
        isLink
        title="Instale a extensão"
        linkTo="https://chrome.google.com/webstore/detail/kallcfbeikglpoaapgfldobcfkgdcfle/"
      />
    </div>
  </div>
);

export default HomeHero;
