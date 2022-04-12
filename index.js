function receivesAFunction(callback) {
    console.log('la la la la la')
    callback()
}

function laugh() {
    console.log('ha ha ha')
}

console.log(laugh(receivesAFunction()));

function returnsANamedFunction() {
    console.log()
    return returnsANamedFunction
}

let returnsAnAnonymousFunction = function() {
    console.log()
    return returnsAnAnonymousFunction()
}