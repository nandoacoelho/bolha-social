import React, { Component, Fragment } from 'react'
import styles from './GeneralResultsModal.module.scss'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import { getColor } from '../../utils/colors'

class GeneralResultsModal extends Component {
  constructor() {
    super()

    this.state = {
      isActive: false,
    }
  }

  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {
    const { isActive } = this.state
    const { generalData, userData } = this.props

    console.log('generalData', generalData)

    return (
      <div
        className={`${styles.wrapper} ${isActive ? styles.wrapperActive : ''}`}>
        <div className={styles.buttonWrapper} onClick={this.toggleModal}>
          <PrimaryButton isActive title="comparativo" />
        </div>
        <div
          className={`${styles.modal} ${isActive ? styles.activeModal : ''}`}>
          <div className={styles.comparative}>
            <div className={styles.userData}>
              <h2 className={styles.dataTitle}>Você</h2>
              {userData &&
                userData.totalPerCategory
                  .filter(category => category.categoryPercentage > 0)
                  .map(category => (
                    <div
                      key={`userData-${category.categoryTitle}`}
                      className={styles.category}>
                      <span
                        style={{ color: getColor(category) }}
                        className={styles.categoryPercentage}>
                        {`${category.categoryPercentage.toFixed(2)} %`}
                      </span>
                      <div className={styles.categoryTitle}>
                        {`- ${category.categoryTitle}`}
                      </div>
                    </div>
                  ))}
            </div>
            <div className={styles.generalData}>
              <h2 className={styles.dataTitle}>Mundo</h2>
              {generalData &&
                generalData
                  .filter(category => category.categoryPercentage > 0)
                  .map(category => (
                    <div
                      key={`generalData-${category.categoryTitle}`}
                      className={styles.category}>
                      <span
                        style={{ color: getColor(category) }}
                        className={styles.categoryPercentage}>
                        {`${category.categoryPercentage.toFixed(2)} %`}
                      </span>
                      <div className={styles.categoryTitle}>
                        {`- ${category.categoryTitle}`}
                      </div>
                    </div>
                  ))}
            </div>
          </div>
          <button className={styles.backButton}>{`< voltar`}</button>
        </div>
      </div>
    )
  }
}

export default GeneralResultsModal
