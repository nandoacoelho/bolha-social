import React, { Component } from 'react'
import styles from './ResultsHero.module.scss'
import Graph from 'vis-react'
import { getColor } from '../../utils/colors'

class ResultsHero extends Component {
  render() {
    const { historyGist } = this.props

    return (
      <div className={styles.wrapper}>
        <div className={styles.backgroundCircle}>
          <Graph
            className={styles.graph}
            graph={{
              nodes: historyGist.totalPerCategory
                .filter(gistItem => gistItem.categoryOccurances > 0)
                .map((gistItem, index) => ({
                  ...gistItem,
                  id: index,
                  level: gistItem.categoryPercentage,
                  value: gistItem.categoryPercentage,
                  color: getColor(gistItem),
                  highlight: {
                    background: getColor(gistItem),
                  },
                  title: gistItem.categoryPercentage.toFixed(2),
                  label: `${
                    gistItem.categoryTitle
                  }\n${gistItem.categoryPercentage.toFixed(2)}%`,
                })),
              edges: [],
            }}
            options={{
              nodes: {
                borderWidth: 0,
                shape: 'circle',
                font: {
                  bold: {
                    face: 'Quicksand',
                    mod: 'bold',
                    size: 1000,
                  },
                  color: '#fff',
                },
                widthConstraint: { minimum: 120, maximum: 120 },
              },
              autoResize: true,
              height: '100%',
              width: '100%',
              physics: {
                stabilization: false,
                minVelocity: 0.01,
                maxVelocity: 10,
                solver: 'repulsion',
                repulsion: {
                  nodeDistance: 90,
                },
              },
              interaction: {
                dragView: false,
                zoomView: false,
              },
            }}
          />
        </div>
      </div>
    )
  }
}

export default ResultsHero
