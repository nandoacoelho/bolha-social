import React, { useState } from 'react'

import Comparative from '../components/Comparative/Comparative'
import Footer from '../components/Footer/Footer'
import Helmet from 'react-helmet'
import ResultsHero from '../components/ResultsHero/ResultsHero'
import ResultsLoading from '../components/ResultsLoading/ResultsLoading'
import { getUserGeneralData } from '../utils/use-data'
import { useResultsContext } from '../utils/use-result-context'

function Results() {
  const [userData, setUserData] = useState(null)
  const [generalData, setGeneralData] = useState(null)
  const [isFirebaseInitted, setIsFirebaseInitted] = useState(false)
  const [loading, setLoading] = useState(true)
  const { isComparative } = useResultsContext()

  const isMobile = window.innerWidth < 770

  function updateData(data) {
    setLoading(false)
    setUserData(data)
  }

  if (!isFirebaseInitted) {
    getUserGeneralData({ setData: updateData, setGeneralData })
    setIsFirebaseInitted(true)
  }

  if (!userData && loading) {
    return <ResultsLoading />
  }

  if (!userData && !loading) {
    return <div> eita </div>
  }

  if (userData && !loading) {
    return (
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        {isComparative || isMobile ? (
          <Comparative generalData={generalData} historyData={userData} />
        ) : (
          <ResultsHero historyGist={userData} />
        )}
        <Footer />
      </div>
    )
  }
}

export default Results
