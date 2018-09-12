import React from "react";
import { Fade } from "react-reveal";
import styles from "./TeamHero.module.scss";
import Profile from "../Profile/Profile";

import nando from "../../assets/images/nando.png";
import maris from "../../assets/images/maris.png";
import juliana from "../../assets/images/juliana.png";

const julianaText =
  "Graduada em comunicação social - Publicidade e Propaganda pela UVA e representando o lado roxo da força a carioca possui experiência com design há anos. Juliana é responsável pelo visual da interface deste projeto.";
const marisText =
  "Formada pela UFRJ, com 10 anos de atuação no mercado publicitário, onde os últimos estavam focados em conteúdo digital, teve a oportunidade de trabalhar para agências e agora trabalho para TIM Brasil com conteúdo para os canais proprietários e desenvolvimento de maketing de influência para a empresa. Por isso, quis aproveitar o mestrado para pensar algo que pudesse devolver ao usuário a clareza sobre seus próprios dados.";
const nandoText =
  "Desenvolvedor de software na VTEX, já trabalhou com agências de design e projetos de grande porte. Fernando é o responsável pelo desenvolvimento da extensão e deste website.";

const TeamHero = () => (
  <div className={styles.wrapper}>
    <Profile
      image={juliana}
      name="Juliana Meirinho"
      text={julianaText}
      linkedin="https://www.linkedin.com/in/juliana-meirinho-80674a62/"
    />
    <Profile
      image={maris}
      name="Maristela Vasconcelos"
      text={marisText}
      linkedin="https://www.linkedin.com/in/maristelaabreu/"
    />
    <Profile
      image={nando}
      name="Fernando Coelho"
      text={nandoText}
      linkedin="https://www.linkedin.com/in/nandocoelho/"
    />
  </div>
);

export default TeamHero;
