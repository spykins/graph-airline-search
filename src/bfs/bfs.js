const bfs = (visited, queue, level, destination) => {
    for(let airlineAndNodePair of queue){
        if( airlineAndNodePair.node.getKey() === destination ){
            return airlineAndNodePair;
        } else {
            visited.add(airlineAndNodePair.node.getKey());
        }
    }

    let s = new Set();
    let newQueue = [];
    for(let airlineAndNodePair of queue){
        for(let airlineAndNodePair2 of airlineAndNodePair.node.getNeighbours()){
            if( !visited.has(airlineAndNodePair2.node.getKey()) && !s.has(airlineAndNodePair2.node.getKey()) ){
                airlineAndNodePair2.node.setPrev({airline: airlineAndNodePair2.airline, node: airlineAndNodePair.node});
                newQueue.push(airlineAndNodePair2);
            }
        }
    }

    if( newQueue.length === 0 ) {
        return null;
    }

    return bfs(visited, newQueue, level + 1, destination);
}

module.exports = bfs