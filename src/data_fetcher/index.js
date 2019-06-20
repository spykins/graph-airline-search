const csv = require('csvtojson')
const path = require('path')

const airlinesFile = path.join(__dirname, '../../data/airlines.csv')
const airportsFile = path.join(__dirname, '../../data/airports.csv')
const routesFile = path.join(__dirname, '../../data/routes.csv')

const readData = async () => {
    let airlines = await csv().fromFile(airlinesFile)
    let airports = await csv().fromFile(airportsFile)
    let routes = await csv().fromFile(routesFile)
    return {airlines, airports, routes}
}

module.exports = readData