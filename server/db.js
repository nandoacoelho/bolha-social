require('firebase/database')
require('dotenv').config()
const fs = require('fs')
const firebase = require('firebase/app')

const flatten = require('lodash/flatten')
const database = require('./database.json')
const config = {
  apiKey: process.env.GATSBY_GOOGLE_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: 'web-behavior',
  storageBucket: '',
  messagingSenderId: process.env.GATSBY_GOOGLE_MESSAGING_SENDER_ID
}

console.log('config', config)

firebase.initializeApp(config)

function getCategoriesData() {
  console.log('Getting categories data')

  firebase
    .database()
    .ref('/categories/')
    .once('value')
    .then(snapshot => {
      const data = snapshot.val()

      console.log('Got data')
      let finalData = {}

      Object.keys(data).forEach(category => {
        finalData = {
          ...finalData,
          [category]: data[category].terms
        }
      })

      console.log('Writing categories data')
      fs.writeFile('categories.json', JSON.stringify(finalData), err => {
        if (err) throw err
        console.log('Data written to file')
      })
    })
}

function getGeneralGist() {
  console.log('Getting general data')
  firebase
    .database()
    .ref('/general-gist/')
    .once('value')
    .then(snapshot => {
      const data = snapshot.val()
      console.log('Got data')
      console.log('Writing general data')

      let flattenedCategories = {}

      data.totalPerCategory.forEach((category) => {
        flattenedCategories = {
          ...flattenedCategories,
          [`${category.categoryTitle}-occurances`]: category.categoryOccurances,
          [`${category.categoryTitle}-percentage`]: category.categoryPercentage
        }
      })
      const finalData = {
        totalHistoryAmount: data.totalHistoryAmount,
        totalNumberOfHistories: data.totalNumberOfHistories,
        ...flattenedCategories
      }
      fs.writeFile('general-statistics.json', JSON.stringify(finalData), err => {
        if (err) throw err
        console.log('Data written to file')
      })
    })
}

function generalFromLocalDatabase(database) {
  let localDatabaseGeneral = database.reduce((acculatedHistories, currentHistory) => {
    let result = Object.keys(currentHistory).map((key) => {
      return {
        [key]: acculatedHistories[key] ? acculatedHistories[key] + currentHistory[key] : currentHistory[key]
      }
    })

    result = result.map((key) => {
      const name = Object.keys(key)[0]
      if (!name.includes('percentage')) return key

      const categoryName = name.replace('-percentage', '')
      const category = result.find((category) => Object.keys(category)[0] === `${categoryName}-occurances`)[`${categoryName}-occurances`]
      const totalHistoryAmount = result.find((category) => Object.keys(category)[0] === 'totalHistoryAmount')['totalHistoryAmount']

      console.log({category})

      return {
        [name]: (category * 100) / totalHistoryAmount
      }
    }).reduce((accumulatedKeys, key) => ({
        ...accumulatedKeys,
        ...key,
      }), {})

    return result
  }, {})

  console.log('Writing database data')
  fs.writeFile(`./general-statistics-local.json`, JSON.stringify(localDatabaseGeneral), err => {
    if (err) throw err
    console.log('Data written to file')
  })
}

function getEveryonesData(user) {
  console.log('Getting every users history')
  firebase
    .database()
    .ref(`/history-data/${user}/history-gist/`)
    .once('value')
    .then(snapshot => {
      const data = snapshot.val()
      console.log({data})
      console.log('Got data')
      const firstEntry = data[Object.keys(data)[0]]
      let flattenedHistory = {
        totalHistoryAmount: firstEntry.totalHistoryAmount,
      }

      firstEntry.totalPerCategory.forEach(category => {
        flattenedHistory =  {
          ...flattenedHistory,
          [`${category.categoryTitle}-occurances`]: category.categoryOccurances,
          [`${category.categoryTitle}-percentage`]: category.categoryPercentage
        }
      })


      console.log('Writing database data')
      fs.writeFile(`./database/database-${user}.json`, JSON.stringify(flattenedHistory), err => {
        if (err) throw err
        console.log('Data written to file')
      })
    })
}

// getCategoriesData()
// getGeneralGist()
// users.forEach((user) => {
//     setTimeout(() => {
//       getEveryonesData(user)
//     }, 1000)
// })



generalFromLocalDatabase(database)