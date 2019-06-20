const bfs = require('./bfs')

const search = (nodes, source, dest, airlines) => {
    if(nodes && nodes[source] && nodes[dest] ){
        source = source.trim().toUpperCase()
        dest = dest.trim().toUpperCase()
        const node = nodes[source]
        const sourceNeighbors = nodes[source].getNeighbours()
        // setting the previous node of the 
        sourceNeighbors.forEach(element => {
            const airline = element.airline
            element.node.setPrev({airline, node});
        });

        let nodePair = bfs(new Set([source]), sourceNeighbors, 0, dest);

        if( nodePair ){
            let node = nodePair.node;
            let mainPath = node.getPrevPath()
            mainPath = mainPath.airline
            var path = [airlines[mainPath] ? airlines[mainPath]['Name'] : mainPath];
            
            while( node.prev != null ){
                nodePair = node.prev;
                node = nodePair.node;
                if( node.prev ) {
                    const airlineAndIata = node.getPrevPath() // { airline, previousIata, iata}
                    const prevPath = airlineAndIata.airline
                    path.push(airlines[prevPath] ? airlines[prevPath]['Name'] : prevPath);
                }          
            }
            path = path.reverse()
            return path;
        }
        return [];
    }
    return (source && source.length === 3 && dest && dest.length === 3) ? [] : null  
}


module.exports = search