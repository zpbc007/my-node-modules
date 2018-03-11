import test from 'ava'
const isSorted = require('../index')
const data = require('./fixtures.json')

const comparators = {
    descending: function (a, b) { return b - a }
  }

test('是否有序test', t => {
    t.plan(data.length)
    let com = null
    data.forEach(element => {
        if (element.comparator) com = comparators.descending
        t.is(isSorted(element.array, com), element.expected)
        com = null
    })
})