const fs = require('fs')

function getChangedFilePathList(dir, filePathList) {
  const filesLoadedFromDir = fs.readdirSync(dir)

  filePathList = filePathList || []

  const filesToExcludePattern = fileName => !/(^|\/)\.[^/.]/g.test(fileName)

  filesLoadedFromDir.filter(filesToExcludePattern).forEach(fileName => {
    const parsedPath = `${dir}/${fileName}`

    if (fs.statSync(parsedPath).isDirectory()) {
      // Recursive call to get all files from folders inside `dir`
      filePathList = getChangedFilePathList(parsedPath, filePathList)
    } else {
      filePathList.push(parsedPath)
    }
  })
  return filePathList
}

const files = getChangedFilePathList("./database")

const database = []

files.forEach(filePath => {
  const file = fs.readFileSync(filePath).toString()
  database.push(file)
})

function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}


const databasefile = fs.readFileSync(`./database.json`)
fs.writeFile(`./database.csv`, convertToCSV(databasefile), err => {
  if (err) throw err
  console.log('Data written to file')
})
// fs.writeFile(`./database.json`, JSON.stringify(database), err => {
//   if (err) throw err
//   console.log('Data written to file')
// })