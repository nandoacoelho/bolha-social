import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Helmet from 'react-helmet'
import Hero from '../components/Hero/Hero'
import PrimaryButton from '../components/PrimaryButton/PrimaryButton'
import React from 'react'
import config from '../../config/SiteConfig'
import facebook from '../assets/images/icon-facebook.png'
import heroImage from '../assets/images/share-hero.png'
import linkedin from '../assets/images/icon-linkedin.png'
import styles from '../components/ShareHero/ShareHero.module.scss'
import twitter from '../assets/images/icon-twitter.png'

const Share = () => (
  <div className="container share-container">
    <Helmet title={`Compartilhe! | ${config.siteTitle}`} />
    <Hero isLeftImage image={heroImage} title="Compartilhe!">
      <div className={styles.buttonWrapper}>
        <PrimaryButton
          isLink
          title="linkedin"
          icon={linkedin}
          linkTo="https://www.linkedin.com/shareArticle?mini=true&url=bolhasocial.com&title=Quer%20descobrir%20qual%20%C3%A9%20a%20sua%20bolha%20e%20como%20voc%C3%AA%20usa%20a%20internet?&summary=Instale%20a%20extens%C3%A3o%20e%20tenha%20acesso%20aos%20seus%20pr%C3%B3prios%20dados.%0A&source="
        />
        <PrimaryButton
          isLink
          title="facebook"
          icon={facebook}
          linkTo="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.bolhasocial.com/"
        />
        <PrimaryButton
          isLink
          title="twitter"
          icon={twitter}
          linkTo="https://twitter.com/intent/tweet?text=Quer%20descobrir%20qual%20%C3%A9%20a%20sua%20bolha%20e%20como%20voc%C3%AA%20usa%20a%20internet?%20Instale%20a%20extens%C3%A3o%20e%20tenha%20acesso%20aos%20seus%20pr%C3%B3prios%20dados.%0Abolhasocial.com"
        />
      </div>
    </Hero>
    <Footer />
  </div>
)

export default Share
