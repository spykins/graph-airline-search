const { assert } = require('chai');
const bfs = require('../bfs')
const graph = require('../graph')
const mockData = require('./mock_data')
const nodes = graph(mockData)


describe("should be able to search", () => {
    it('should return null when nothing is passed into bfs', () => {
        const searchResult = bfs()
        assert.isNull(searchResult)
    })

    it('should return empty array when a string not present in the data is passed into it', () => {
        const searchResult = bfs(nodes, "WAL", "AKS")
        assert.isArray(searchResult)
        assert.isTrue(searchResult.length === 0)
    })

    it("should return an airline information that fly through the route ", () => {
        const searchResult = bfs(nodes, 'BNE', 'CAN', mockData.airlines)
        assert.isArray(searchResult)
        assert.isTrue(searchResult.length === 1)
        const airline = searchResult[0]
        assert.equal(airline, 'China Southern Airlines')

        const multipleSearchResult = bfs(nodes, 'ABJ', 'XMN', mockData.airlines)
        assert.isArray(multipleSearchResult)
        assert.isTrue(multipleSearchResult.length === 2)
    })

})