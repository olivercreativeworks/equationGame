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
 return randomKey
}


