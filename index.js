function receivesAFunction(functiodd) {
    functiodd();
}

function returnsANamedFunction () {
    return receivesAFunction;
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("hey bithch")
    }
}