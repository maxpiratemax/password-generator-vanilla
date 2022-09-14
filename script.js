const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const generateBtn = document.querySelector('#button')
generateBtn.addEventListener('click', generatePass)
const leftWindow = document.querySelector('#left')
leftWindow.addEventListener('click', copyLeft)
const rightWindow = document.querySelector('#right')
rightWindow.addEventListener('click', copyRight)
const message = document.querySelector('#message')
const slider = document.querySelector('#myRange')
const outputSlider = document.querySelector('#subtitle-slider')
let passLength = slider.value
let leftPass = ''
let rightPass = ''

leftWindow.classList.add('blue')
rightWindow.classList.add('blue')

let outputTemplate = '<span class="green">0</span> symbols'
outputTemplate = outputTemplate.replace('0', slider.value)
outputSlider.innerHTML = outputTemplate

slider.oninput = function () {
    outputSlider.innerHTML = outputTemplate.replace('10', this.value)
    passLength = this.value
}

function copyLeft() {
    if (leftPass) {
        navigator.clipboard.writeText(leftPass)
            .then(() => {
                showAndHideMessage()
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });
    }
}

function copyRight() {
    navigator.clipboard.writeText(rightPass)
        .then(() => {
            showAndHideMessage()
        })
        .catch(err => {
            console.log('Something went wrong', err);
        });
}

function generatePass() {
    leftPass = ''
    rightPass = ''
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        let randomSymbolsIndex = Math.floor(Math.random() * symbols.length)
        leftPass += characters[randomIndex]
        leftPass += symbols[randomSymbolsIndex]
        leftPass = leftPass.slice(0, passLength)
    }
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        rightPass += characters[randomIndex]
    }



    leftWindow.textContent = leftPass
    leftWindow.classList.add('pointer')
    leftWindow.classList.remove('blue')
    leftWindow.classList.add('green')

    rightWindow.textContent = rightPass
    rightWindow.classList.add('pointer')
    rightWindow.classList.remove('blue')
    rightWindow.classList.add('green')

}


function showAndHideMessage() {
    message.textContent = 'The password was copied'
    setTimeout(() => message.textContent = '', 3000)
}