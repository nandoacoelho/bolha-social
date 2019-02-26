import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import HomeHero from '../components/HomeHero/HomeHero'
import Footer from '../components/Footer/Footer'
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
