import React from "react";
import styles from "./ContactHero.module.scss";
import heroImage from "../../assets/images/hero-contact.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
const ContactHero = () => (
  <div className={styles.wrapper}>
    <img className={styles.heroImage} src={heroImage} />
    <div className={styles.heroText}>
      <h2>Entre em contato</h2>
      <p className={styles.description}>
        Preencha o formulário e entraremos em contato com você!
      </p>
      <form method="POST" action="https://formspree.io/lamartesi@gmail.com">
        <div className={styles.inputWrapper}>
          <input type="text" name="name" placeholder="Nome" required />
        </div>
        <div className={styles.inputWrapper}>
          <input type="email" name="_replyto" placeholder="Email" required />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="tel"
            name="phone"
            placeholder="Telefone com DDD"
            required
          />
        </div>
        <div className={styles.inputWrapper}>
          <textarea name="message" placeholder="Mensagem" rows="4" required />
        </div>
        <div className={styles.inputWrapper}>
          <PrimaryButton isSubmit title="enviar" />
        </div>
      </form>
    </div>
  </div>
);

export default ContactHero;
