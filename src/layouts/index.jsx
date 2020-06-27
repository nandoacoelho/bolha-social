import '../utils/emma.scss'

import React, { Component } from 'react'

import Helmet from 'react-helmet'
import Navigation from '../components/Navigation/Navigation'
import NavigationResults from '../components/NavigationResults/NavigationResults'
import SEO from '../components/SEO/SEO'
import appleTouchIcon from './apple-touch-icon.png'
import favicon from './favicon.png'

class MainLayout extends Component {
  constructor() {
    super()
    this.state = {
      isResults: typeof window !== 'undefined' && window.location.pathname === '/results/'
    }
  }

  componentDidMount() {
    window.onhashchange = () => {
      this.setState({
        isResults: typeof window !== 'undefined' && window.location.pathname === '/results/'
      })
    }
  }

  render() {
    const { children } = this.props
    const { isResults } = this.state

    return (
      <React.Fragment>
        <Helmet>
          <link rel="shortcut icon" href={favicon} />
          <link rel="apple-touch-icon" href={appleTouchIcon} />
          <link rel="apple-touch-icon" href={appleTouchIcon} />
        </Helmet>
        <SEO />
        {typeof window !== 'undefined' && window.location.pathname === '/results/' ? (
          <NavigationResults />
        ) : (
          <Navigation />
        )}
        {children()}
      </React.Fragment>
    )
  }
}

export default MainLayout
