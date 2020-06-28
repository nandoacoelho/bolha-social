import React from 'react'
import getColor from '../../utils/use-category-color'
import styles from './CategoryDescription.module.scss'

export default function CategoryDescription({ image, title, description }) {
  return (
    <div className={styles.categoryTitleSmall}>
      {image && <img src={image} />}
      <div className={styles.description}>
        <h3 style={{ color: getColor({ categoryTitle: title.toUpperCase() }) }}>{title}</h3>
        <p className={styles.body}>{description}</p>
      </div>
    </div>
  )
}
