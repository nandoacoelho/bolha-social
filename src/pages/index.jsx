import Footer from '../components/Footer/Footer'
import Helmet from 'react-helmet'
import Hero from '../components/Hero/Hero'
import HomeHero from '../components/HomeHero/HomeHero'
import React from 'react'
import config from '../../config/SiteConfig'

const Index = props => {
  return (
    <div className="container index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <HomeHero />
      <Footer />
    </div>
  )
}

export default Index
