import React, { Fragment } from 'react'

import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import CategoryItem from '../CategoryItem/CategoryItem'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import getColor from '../../utils/use-category-color'
import styles from './Comparative.module.scss'

const Comparative = ({ historyData, generalData }) => {
  function goToDescription() {
    const description = document.querySelector('#bubble-description-wrapper')

    description.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.userHistory}>
          <p className={styles.title}>Você</p>
          <div className={styles.userHistoryList}>
            {historyData &&
              historyData.totalPerCategory
                .filter(gistItem => gistItem.categoryPercentage > 0.2)
                .map(category => <CategoryItem category={category} />)}
          </div>
          <div className={styles.button}>
            <PrimaryButton onClick={goToDescription} isActive title="O que tem em cada bolha?" />
          </div>
        </div>
        <div className={styles.generalHistory}>
          <p className={styles.title}>Universo Coletado</p>
          <div className={styles.generalHistoryList}>
            {generalData &&
              generalData
                .filter(category => category.categoryPercentage > 0)
                .map(category => <CategoryItem category={category} />)}
          </div>
        </div>
      </div>
      <div id="bubble-description-wrapper" className={styles.eachBubbleDataWrapper}>
        <div className={styles.categoriesListWrapper}>
          <p className={styles.title}>O que tem em cada bolha?</p>
          <div className={styles.categoriesList}>
            {historyData &&
              historyData.totalPerCategory.map(category => (
                <p
                  className={styles.categoryTitleSmall}
                  style={{
                    color: getColor(category)
                  }}
                >
                  {category.categoryTitle}
                </p>
              ))}
          </div>
        </div>
        <div className={styles.categoriesDetails}>
          <CategoriesSlider />
        </div>
      </div>
    </Fragment>
  )
}

export default Comparative
