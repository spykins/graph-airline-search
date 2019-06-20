const express = require('express')
const readData = require('./data_fetcher')
const createGraph = require('./graph')
const search = require('./bfs')

let airlinesAirportRoutes
let airlinesObj = {}
let nodes

//graph(data)

const app = express()
//http://localhost:3000/?origin=ABJ&dest=BCH
app.get("/", (req, res) => {
    const dest = req.query.dest
    const origin = req.query.origin

    if (dest && origin && dest.length === 3 && origin.length === 3) {
        const result = search(nodes, origin, dest, airlinesObj)
        if (result && result.length > 0) {
            res.status(200).send(result)
        } else if (result) {
            res.status(200).send({ message: `No route found from ${origin} to ${dest} ` })
        } else {
            res.status(200).send({ message: `dest and origin doesn't exist` })
        }
    } else {
        res.status(400).send({ error: "Pass query parameter dest and origin, ensure both is three character" })
    }
})




readData()
    .then(data => {
        airlinesAirportRoutes = data
        const airlines = airlinesAirportRoutes.airlines
        if (airlines) {
            for(let airline of airlines) {
                airlinesObj[airline['2 Digit Code']] = airline
            }
        }
        nodes = createGraph(airlinesAirportRoutes)
        app.listen(3000, () => {
            console.log("Listening at 3000 ")
        })
    })
    .catch(error => console.log(error))



