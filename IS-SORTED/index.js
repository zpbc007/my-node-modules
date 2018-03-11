module.exports = function isSorted (array, comparator) {
    comparator = comparator || defaultComparator

    for (let i = 1, len = array.length; i < len; i++) {
        if (comparator(array[i - 1], array[i]) > 0) return false 
    }

    return true
}

function defaultComparator (a, b) {
    return a - b
}