// declaration main variables
const button = document.querySelector('.main__btn');
const codeKeyInput = document.getElementById('code-key-input');
const codeKeyAdded = document.getElementById('code-key-added');
const messageInput = document.getElementById('message-input');
const messageAdded = document.getElementById('message-added');
// based alphabet (latin) - standard
let standardLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w", "y", "z"];
// download code key
codeKeyInput.addEventListener("change", () =>{
    codeKeyAdded.textContent = codeKeyInput.value;
});
// download encrypted message
messageInput.addEventListener("change", () =>{
    messageAdded.textContent = messageInput.value;
});
// saving params from inputs
const saveParams = () => {
    // download code added in input & transform to Array
    let codedLetters = [...codeKeyAdded.textContent];    
    const messageToEncrypt = [...messageAdded.textContent];
    // Adding indexes' elements to new Array to matching with 'not-standard array'
    let newArray = [];
    messageToEncrypt.forEach(function(messageToEncrypt){
        newArray.push(standardLetters.indexOf(messageToEncrypt));
    });
    // checking indexes' every letter from 'encrypted message' with standard array 
    let result = [];
    newArray.forEach(function(newArray){
        result.push(codedLetters[newArray]);
    });
    // variable whick shows clearly decoded message
    let displayResult = result.join(" ");
    // show result in html
    document.getElementById('finnish').innerHTML = displayResult;
};
// start function after click button
const decodeFunction = () => {
    button.addEventListener('click', () =>{
        saveParams();
    });
};
decodeFunction();