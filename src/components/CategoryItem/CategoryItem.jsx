import React from 'react'
import styles from './CategoryItem.module.scss'
import getColor from '../../utils/use-category-color'

export default function CategoryItem({ category }) {
  return (
    <p className={styles.categoryTitleSmall}>
      <span style={{ color: getColor(category) }}>{category.categoryPercentage.toFixed(2)}%</span>
      {' - '}
      {category.categoryTitle}
    </p>
  )
}
