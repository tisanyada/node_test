function add(a, b) {
    if(typeof(a) != 'number') return 'please insert a valid number value for a'
    if(typeof(b) != 'number') return 'please insert a valid number value for b'

    return a + b
}

module.exports = add