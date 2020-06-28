import React, { Fragment } from 'react'

import Footer from '../components/Footer/Footer'
import Form from '../components/Form/Form'
import Helmet from 'react-helmet'
import Hero from '../components/Hero/Hero'
import config from '../../config/SiteConfig'
import heroImage from '../assets/images/contact-hero2.png'
import { useState } from 'react'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="container contact-container">
      <Helmet title={`Contato | ${config.siteTitle}`} />
      <Hero isLeftImage image={heroImage}>
        {!isSubmitted ? (
          <Fragment>
            <h2>Entre em contato</h2>
            <Form onsubmit={() => setIsSubmitted(true)} />{' '}
          </Fragment>
        ) : (
          <h2>Obrigado!</h2>
        )}
      </Hero>
      <Footer />
    </div>
  )
}

export default Contact
