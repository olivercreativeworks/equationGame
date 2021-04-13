// Utility Functions

/**
 * Returns a random key from an array or dictonary
 * @param {object} options The array or dictionary you want to get a random key from
 * @return {string | number} A random key from the array or dictionary 
 */
function randomChoice(options:object) {
 const optionsKeysList = Object.keys(options)
 const randomIndex = Math.floor(Math.random() * optionsKeysList.length)
 const randomKey = optionsKeysList[randomIndex]
 return options[randomKey]
}

function createEquation( listOfTerms:object, numberOfTerms:number, preferredFirstTerms?:object) {
 if (typeof (numberOfTerms) !== 'number') {
  throw TypeError(`@param numberOfTerms should be type number, not ${typeof(numberOfTerms)}`)
 }
 if (numberOfTerms < 1) {
  throw RangeError('@param numberOfTerms cannot be less than 1')
 }
 let equation = [];
 if (preferredFirstTerms) {
  const firstTerm = randomChoice(preferredFirstTerms)
  equation.push(firstTerm)
  }
 while (equation.length < numberOfTerms) {
  const nextTerm = randomChoice(listOfTerms)
  equation.push(nextTerm)
 }
 return equation
}

function dataIsArray(data:any) {
 if (Array.isArray(data)) {
  return true
 }
}

function showKeys(obj:any) {
 const keys = Object.keys(obj)
 return keys
}

function showValues(obj:any) {
 const keys = Object.keys(obj)
 let values = []
 for (let key in keys) {
  values.push(obj[key])
 }
 return values
}

function showItems(obj: any) {
 let keys = showKeys(obj)
 let values = showValues(obj)
 let items = new Object();
 for (let i = 0; i < keys.length; i++) {
  items[keys[i]] = values[i]
 }
 return JSON.stringify(items)
}

const operations: object = {
 '-': '-',
 '+': '+',
 '':' '
}

const colors:object = {
 0: 'mint',
 1: 'red',
 2 : 'yellow',
 3 : 'blue',
 4 : 'green',
 5 : 'orange',
 6 : 'purple',
 7 : 'black',
 8 : 'white',
 9 : 'grey',
}







