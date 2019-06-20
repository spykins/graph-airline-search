const Node = require('./Node')
const createGraph = (data) => {
    if (data) {
        const { airports, routes } = data
        let nodes = {};
        //{airportIATA#: NodeInstanceOfTheAirport}

        for (const airport of airports) {
            const key = airport["IATA 3"]
            if (key.length === 3) {
                nodes[key] = new Node(airport)
            }
        }

        for (const route of routes) {
            const origin = route['Origin']
            const destination = route['Destination']
            const airlineId = route['Airline Id']
            if (origin && nodes[origin] && nodes[destination]) {
                nodes[origin].addNeigbour(airlineId, nodes[destination])
            }
        }
        return nodes
    }
}

module.exports = createGraph