"use strict";
// Utility Functions
/**
 * Returns a random key from an array or dictonary
 * @param {object} options The array or dictionary you want to get a random key from
 * @return {string | number} A random key from the array or dictionary
 */
function randomChoice(options) {
    var optionsKeysList = Object.keys(options);
    var randomIndex = Math.floor(Math.random() * optionsKeysList.length);
    var randomKey = optionsKeysList[randomIndex];
    return options[randomKey];
}
function createEquation(listOfTerms, numberOfTerms, preferredFirstTerms) {
    if (typeof (numberOfTerms) !== 'number') {
        throw TypeError("@param numberOfTerms should be type number, not " + typeof (numberOfTerms));
    }
    if (numberOfTerms < 1) {
        throw RangeError('@param numberOfTerms cannot be less than 1');
    }
    var equation = [];
    if (preferredFirstTerms) {
        var firstTerm = randomChoice(preferredFirstTerms);
        equation.push(firstTerm);
    }
    while (equation.length < numberOfTerms) {
        var nextTerm = randomChoice(listOfTerms);
        equation.push(nextTerm);
    }
    return equation;
}
function dataIsArray(data) {
    if (Array.isArray(data)) {
        return true;
    }
}
function showKeys(obj) {
    var keys = Object.keys(obj);
    return keys;
}
function showValues(obj) {
    var keys = Object.keys(obj);
    var values = [];
    for (var key in keys) {
        values.push(obj[key]);
    }
    return values;
}
function showItems(obj) {
    var keys = showKeys(obj);
    var values = showValues(obj);
    var items = new Object();
    for (var i = 0; i < keys.length; i++) {
        items[keys[i]] = values[i];
    }
    return JSON.stringify(items);
}
var operations = {
    '-': '-',
    '+': '+',
    '': ' '
};
var colors = {
    0: 'mint',
    1: 'red',
    2: 'yellow',
    3: 'blue',
    4: 'green',
    5: 'orange',
    6: 'purple',
    7: 'black',
    8: 'white',
    9: 'grey',
};
