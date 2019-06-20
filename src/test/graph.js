const { assert } = require('chai');
const graph = require('../graph')
const mockData = require('./mock_data')

describe("should populate the graph and set the neighbors accordingly", () => {
    it('should return an empty object', () => {
        const nodes = graph(null)
        assert.isUndefined(nodes)
    })

    it('should return value', () => {
        const nodes = graph(mockData)
        assert.isDefined(nodes)
    })
})