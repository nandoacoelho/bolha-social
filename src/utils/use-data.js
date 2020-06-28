import 'firebase/database'

import * as firebase from 'firebase/app'

import flatten from 'lodash/flatten'

const Storage = typeof window !== 'undefined' && window.localStorage

const userId =
  (typeof window !== 'undefined' && window.location.hash.replace('#', '')) ||
  (Storage && Storage.getItem('userId'))

const config = {
  apiKey: process.env.GATSBY_GOOGLE_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: 'web-behavior',
  storageBucket: '',
  messagingSenderId: process.env.GATSBY_GOOGLE_MESSAGING_SENDER_ID
}

function registerEveryOnesData() {
  console.log('Getting general data')
  firebase
    .database()
    .ref('/history-data/')
    .once('value')
    .then(snapshot => {
      const data = snapshot.val()
      console.log('Got data')
      const flattenedHistories = flatten(
        Object.keys(data).map(dataItem => {
          const localData = data[dataItem]['history-gist']

          return Object.keys(localData)
            .map(localDataItem => localData[localDataItem])
            .pop()
        })
      )

      let processedHistories = flattenedHistories.reduce((accumulatedResults, currentRegistry) => {
        const accumulatedHistoryOccurances =
          accumulatedResults.totalHistoryAmount + currentRegistry.totalHistoryAmount
        return {
          totalHistoryAmount: accumulatedHistoryOccurances,
          totalPerCategory: currentRegistry.totalPerCategory.map((category, index) => {
            const accumulatedOccurances =
              category.categoryOccurances +
              accumulatedResults.totalPerCategory[index].categoryOccurances

            return {
              categoryOccurances: accumulatedOccurances,
              categoryPercentage: (accumulatedOccurances * 100) / accumulatedHistoryOccurances,
              categoryTitle: category.categoryTitle
            }
          })
        }
      })

      processedHistories = {
        ...processedHistories,
        totalNumberOfHistories: flattenedHistories.length
      }

      console.log('Writing general data')
      firebase
        .database()
        .ref('/general-gist/')
        .set(processedHistories)
    })
}

function getGeneralHistoryData({ setGeneralData }) {
  firebase
    .database()
    .ref('/general-gist/')
    .once('value')
    .then(snapshot => {
      const data = snapshot.val()
      const dataList = Object.keys(data).map(key => data[key])

      if (dataList.length > 0) {
        const latestData = dataList.pop()
        setGeneralData(latestData)
      }
    })
}

function getFirebaseData({ setData }) {
  firebase.initializeApp(config)

  console.log('Getting personal data')
  firebase
    .database()
    .ref('/history-data/' + userId + '/history-gist/')
    .once('value')
    .then(snapshot => {
      const data = snapshot.val()

      if (data) {
        const dataList = Object.keys(data).map(key => data[key])

        if (dataList.length > 0) {
          const latestData = dataList.pop()
          setData(latestData)
        }
      }
    })
}

export function getUserGeneralData({ setLoading, setData, setGeneralData }) {
  if (firebase.apps.length > 0) {
    firebase
      .app()
      .delete()
      .then(() => {
        getFirebaseData({ setLoading, setData })
        getGeneralHistoryData({ setGeneralData })
      })
  } else {
    getFirebaseData({ setLoading, setData })
    getGeneralHistoryData({ setGeneralData })
  }
}
