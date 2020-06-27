import React, { Fragment } from 'react'

import { Fade } from 'react-reveal'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import styles from './Hero.module.scss'

const Hero = ({ image, title, body, isLeftImage, linkTitle, linkUrl }) => (
  <div className={`${isLeftImage ? styles.wrapperLeft : styles.wrapper}`}>
    <Fade down />
    {isLeftImage ? (
      <Fragment>
        <div className={styles.mainLeft}>
          <div className={styles.heroTextLeft}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {body.map((item, index) => (
              <p key={`body-${index}`} className={styles.body}>
                {item}
              </p>
            ))}
          </div>
          {linkTitle && linkUrl && <PrimaryButton isLink title={linkTitle} linkTo={linkUrl} />}
        </div>
        <img className={styles.heroImageLeft} src={image} />
      </Fragment>
    ) : (
      <Fragment>
        <img className={styles.heroImage} src={image} />
        <div className={styles.main}>
          <div className={styles.heroText}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {body.map((item, index) => (
              <p key={`body-${index}`} className={styles.body}>
                {item}
              </p>
            ))}
          </div>
          {linkTitle && linkUrl && <PrimaryButton isLink title={linkTitle} linkTo={linkUrl} />}
        </div>
      </Fragment>
    )}
  </div>
)

export default Hero
