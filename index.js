// importing the add module
const add = require('./lib/math/add')


const ages = add(34, 56)
const heights = add(45.3, 56.3)


console.log('sum of ages: ', ages)
console.log('sum of heights: ', heights)