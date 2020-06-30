import React, { Component } from 'react'

import BubbleChart from './BubbleChart'
import { ResponsiveBubble } from '@nivo/circle-packing'
import { getCategoryTitle } from '../../utils/use-category-title'
import getColor from '../../utils/use-category-color'
import styles from './ResultsHero.module.scss'

class ResultsHero extends Component {
  render() {
    const { historyGist } = this.props
    const items = historyGist.totalPerCategory
      .filter(gistItem => gistItem.categoryPercentage > 0.2)
      .map(gistItem => ({
        ...gistItem,
        v:
          gistItem.categoryOccurances < 2000
            ? gistItem.categoryOccurances * 10
            : gistItem.categoryOccurances,
        occurances: gistItem.categoryOccurances,
        color: getColor(gistItem),
        name: `${gistItem.categoryTitle}\r\n\n${gistItem.categoryPercentage.toFixed(2)}%`,
        id: getCategoryTitle(gistItem.categoryTitle)
      }))

    return (
      <div className={styles.wrapper}>
        <div className={styles.backgroundCircle} id="background-circle">
          <BubbleChart useLabels data={items} />
        </div>
      </div>
    )
  }
}

export default ResultsHero
