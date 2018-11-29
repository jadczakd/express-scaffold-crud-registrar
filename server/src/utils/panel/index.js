import fs from 'fs'
const fileName = '../../../views/registeredModels.json'

export const generatePanels = (model, method, url) => {
  const routes = require(fileName)
  const { modelName } = model
  if (!routes[modelName]) {
    routes[modelName] = {}
  }
  routes[modelName][method] = url
  fs.writeFile('./views/registeredModels.json', JSON.stringify(routes), function (err) {
    if (err) return console.log(err)
    console.log(JSON.stringify(routes))
    console.log('writing to ' + fileName)
  })
  // add route to the object

  // const registeredViews = fs.readFileSync('../../../views/registe.json')
  // console.log(model.title)
  // console.dir(model.properties, { depth: null })
}
