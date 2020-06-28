import '../utils/emma.scss'

import React, { Fragment } from 'react'

import Helmet from 'react-helmet'
import Navigation from '../components/Navigation/Navigation'
import NavigationResults from '../components/NavigationResults/NavigationResults'
import { ResultsContextProvider } from '../utils/use-result-context'
import SEO from '../components/SEO/SEO'
import appleTouchIcon from './apple-touch-icon.png'
import favicon from './favicon.png'
import { useState } from 'react'

function MainLayout({ children }) {
  const [isResults, setIsResults] = useState(null)

  if (typeof window !== 'undefined') {
    window.onhashchange = () => {
      setIsResults(typeof window !== 'undefined' && window.location.pathname === '/results/')
    }

    window.onpopstate = function(event) {
      setIsResults(typeof window !== 'undefined' && window.location.pathname === '/results/')
    }
  }

  if (isResults === null) {
    setIsResults(typeof window !== 'undefined' && window.location.pathname === '/results/')
    return null
  }

  function showDefaultNavigation() {
    setIsResults(false)
  }

  return (
    <Fragment>
      <Helmet>
        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" href={appleTouchIcon} />
        <link rel="apple-touch-icon" href={appleTouchIcon} />
      </Helmet>
      <SEO />
      <ResultsContextProvider>
        {isResults ? (
          <NavigationResults showDefaultNavigation={showDefaultNavigation} />
        ) : (
          <Navigation />
        )}
        {children()}
      </ResultsContextProvider>
    </Fragment>
  )
}

export default MainLayout
