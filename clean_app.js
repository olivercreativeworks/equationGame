// This is a game where the player is shown an equation and tries to figure out what the output will be.

import './utilityFuncs.js'

// Background Functions

// Make the Equation

function createEquation(possibleEquationComponents, equationLength) {
 let equation = [];
 for (let i = 0; i < equationLength; i++){

 }
}
function sample(list, num, dict) {
 let sampleList = [];
 for (let i = 0; i < num; i++){
  let randomNum = Math.floor(Math.random() * list.length)
  sampleList.push(dict[list[randomNum]])
 }
 return sampleList
}

// Equation Values
const colors = {
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
 '-': '-',
 '+': '+'
}

console.log(colors[randomChoice(colors)])


function sample(list, num, dict) {
 let sampleList = [];
 for (let i = 0; i < num; i++){
  let randomNum = Math.floor(Math.random() * list.length)
  sampleList.push(dict[list[randomNum]])
 }
 return sampleList
}

function generateRandomCharacterList(list, num=1, dict) {
 return sample(list, num, dict).join(' ')
}

function submitAnswer() {

 let answer = getOutputValue()
 let equation = document.getElementById('equationDisplayArea').textContent
 let currentScore = document.getElementById('scoreDisplayArea').textContent
 
 let submitButton = document.getElementById('submit')
 submitButton.classList.add('hidden')

 let continuePlay = doesAnswerMatchEquation(answer, equation);
 if (continuePlay) {
  scoreUpdate(currentScore)
 }
}

function getOutputValue() {
 let answer = output.value
 console.log(answer)
 output.value = null
 return answer
}

function createNewElement(elementName, textContent) {
 const newElement = document.createElement(elementName)
 const newElementTextContent = document.createTextNode(textContent)
 newElement.appendChild(newElementTextContent)
 return newElement
}

function createContinueOrGameOverButton(buttonText, buttonId, continueGame=true, message=null) {
 let result = document.getElementById('result')
 console.log(message)
 const button = createNewElement('button', buttonText)
 button.id = buttonId
 // console.log(nextQuestion)
 button.addEventListener('click', function (e, nextRound=continueGame)
 {
  return startNextRound(e, nextRound)
 })
 result.append(button)
}



function addTriggerButtonWithEnterKey(element) {
 element.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
   e.preventDefault();
   element.click()
  }
 })
}

function startNextRound(button=null, nextRound) {
 // clear any output values
 let output = document.getElementById('output')
 output.value = null
 console.log('working...')
 // create new Equation value
 let equationDisplayArea = document.getElementById('equationDisplayArea')
 let randomCharacterList = generateRandomCharacterList(numList, 3, colors)
 equationDisplayArea.innerText = randomCharacterList

 // remove Continue or Game Over button
 button = document.getElementById(button.target.id)
 button.remove()

 // add Submit button back
 submitButton = document.getElementById('submit')
 submitButton.classList.remove('hidden')

 // reset score if there is no next round (i.e. game over)
 if (!nextRound) {
  let scoreValue = document.getElementById('scoreDisplayArea');
  scoreValue.textContent = 0;
 }
}

function scoreUpdate(currentScore) {
 currentScore++
 let scoreDisplayArea = document.getElementById('scoreDisplayArea')
 scoreDisplayArea.textContent = currentScore 
}

function doesAnswerMatchEquation(answer, equation) {
 
 if (answer != equation) {
  createContinueOrGameOverButton('Game Over', 'gameOverButton', false, 'Sorry :(')
  return false
 }

 createContinueOrGameOverButton('Continue', 'continueButton', true, 'Yay You Win!')
 return true
}


function evaluateEquation(equation) {
 
}


// Variables



const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '-', '+']
let randomCharacterList = generateRandomCharacterList(numList, 3, colors)

const equation = document.getElementById('equation')

const output = document.getElementById('output')

output.addEventListener('keyup', function (e) {
 if (e.key === 'Enter') {
  let buttons = document.querySelectorAll('button')
  for (btn of buttons) {
   if (btn.id != 'submit' || buttons.length == 1) {
    btn.click()  
   }
  }
 }
})

const button = document.querySelector('button')
button.addEventListener('click', submitAnswer)

const newSpan = document.createElement('span')
newSpan.id='equationDisplayArea'
const equationValue = document.createTextNode(randomCharacterList);

newSpan.appendChild(equationValue)
equation.appendChild(newSpan)

let scoreElement = document.getElementById('score')
let scoreDisplayArea = document.createElement('p')
let scoreValue = 0;
scoreDisplayArea.id = 'scoreDisplayArea'
scoreDisplayArea.innerHTML = scoreValue
scoreElement.appendChild(scoreDisplayArea)



