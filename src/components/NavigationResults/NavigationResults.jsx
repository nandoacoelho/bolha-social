import React, { Component } from 'react'

import Link from 'gatsby-link'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import config from '../../../config/SiteConfig'
import logo from '../../assets/images/logo.png'
import styles from './NavigationResults.module.scss'
import { useResultsContext } from '../../utils/use-result-context'

export default function NavigationResults({ showDefaultNavigation }) {
  const { isComparative, setIsComparative } = useResultsContext()
  const isMobile = window.innerWidth < 770

  function toggleComparative() {
    setIsComparative(!isComparative)
  }
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.name}>
          <span onClick={showDefaultNavigation}>
            <Link to="/">
              <img className={styles.logo} width="80px" src={logo} alt={config.siteTitle} />
            </Link>
          </span>
        </div>
        {!isMobile && (
          <nav className={styles.navigation}>
            <span>
              <PrimaryButton
                onClick={toggleComparative}
                isActive={isComparative}
                title="comparativo"
              />
            </span>
          </nav>
        )}
      </div>
    </header>
  )
}
