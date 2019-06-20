class Node{
    constructor(airport){
        this.name = airport['Name'] 
        this.city = airport['City'] 
        this.country = airport['Country']
        this.iata = airport['IATA 3']
        this.latitude = airport['Latitute']
        this.longitude = airport['Longitude']
        this.neighbours = [];
        this.prev = null;
    }

    addNeigbour(airline, node) {
        this.neighbours.push({airline, node})
    }

    getNeighbours(){
        return this.neighbours;
    }

    setPrev(airlineAndParentNode){
        this.prev = airlineAndParentNode;
    }

    getPrevPath(){
        return { airline: this.prev.airline, previousIata: this.prev.node.iata, iata: this.iata} 
    }

    getKey(){
        return this.iata;
    }

    toString() {
        return this.iata + " {" + this.neighbours.map(obj => obj.node.iata) + "}";
    }
}

module.exports = Node;