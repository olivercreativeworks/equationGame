// Utility Functions
function randomChoice(options) {
    var choices = Object.keys(options);
    var randomIndex = Math.floor(Math.random() * choices.length);
    var randomChoice = choices[randomIndex];
    return randomChoice;
}
