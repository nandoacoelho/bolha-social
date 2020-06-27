import React, { Component } from 'react'

import BubbleChart from './BubbleChart'
import { ResponsiveBubble } from '@nivo/circle-packing'
import styles from './ResultsHero.module.scss'

class ResultsHero extends Component {
  getColor(gistItem) {
    switch (gistItem.categoryTitle) {
      case 'LINKEDIN':
      case 'FACEBOOK':
      case 'YOUTUBE':
      case 'INSTAGRAM':
      case 'CIÊNCIA':
      case 'TECNOLOGIA':
      case 'JOGOS':
        return '#5fa9ff'

      case 'CARROS':
      case 'VIAGENS':
      case 'MODA':
      case 'INTERNACIONAL':
      case 'TV E CELEBRIDADES':
      case 'ESOTERISMO':
      case 'EMPREGOS E CONCURSOS':
      case 'HUMOR':
        return '#9475d0'

      case 'FITNESS':
      case 'ECONOMIA':
      case 'EDUCACAO':
      case 'SERIES E FILMES':
      case 'POP/ARTE':
      case 'SEXO':
        return '#ff8f79'

      case 'ALIMENTAÇÃO E SAÚDE':
      case 'NATUREZA':
      case 'POLITICA':
      case 'NOTÍCIAS':
      case 'CULINÁRIA':
      case 'DECORAÇÃO':
      default:
        return '#00cfb9'
    }
  }

  render() {
    const { historyGist } = this.props
    const data = [{ name: 'Facebook', percentage: '2%', v: 200 }]
    const items = historyGist.totalPerCategory
      .filter(gistItem => gistItem.categoryPercentage > 0.2)
      .map(gistItem => ({
        ...gistItem,
        v:
          gistItem.categoryOccurances < 2000
            ? gistItem.categoryOccurances * 10
            : gistItem.categoryOccurances,
        occurances: gistItem.categoryOccurances,
        color: this.getColor(gistItem),
        name: `${gistItem.categoryTitle}\r\n\n${gistItem.categoryPercentage.toFixed(2)}%`,
        id: gistItem.categoryTitle
      }))

    console.log(items)

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
