import { Fade } from 'react-reveal'
import Link from 'gatsby-link'
import React from 'react'
import styles from './PrimaryButton.module.scss'
const PrimaryButton = ({ isLink, linkTo, title, isActive, icon, onClick }) => {
  if (isLink) {
    return (
      <a
        className={`${styles.primaryButton} ${isActive ? styles.active : ''}${
          icon ? styles.buttonIcon : ''
        }`}
        href={linkTo}
        target="_blank"
      >
        {title}
        {icon && (
          <div className={styles.icon}>
            <img src={icon} />
          </div>
        )}
      </a>
    )
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${styles.primaryButton} ${isActive ? styles.active : ''}`}
        type="button"
      >
        {title}
      </button>
    )
  }

  return (
    <Link to={linkTo}>
      <button className={`${styles.primaryButton} ${isActive ? styles.active : ''}`} type="button">
        {title}
      </button>
    </Link>
  )
}

export default PrimaryButton
