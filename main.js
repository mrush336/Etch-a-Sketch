
// Creating the divs
const container = document.querySelector('.container');
function createDiv(num){
    for (i=0; i<num; i++){
        let i = document.createElement('div');
        i.classList.add('box');
        //i.textContent = ('box');
        container.appendChild(i);
    }
}
createDiv(256);

// Adding the eventListener to the divs
const box = document.querySelectorAll('.box');
function addEvent(item, event, func){
    for(i=0;i<item.length;i++){
        item[i].addEventListener(event, func, true);
    };
};
//Defineing the color change function
var color = 'black';
function colorChange(){
    this.style.backgroundColor = `${color}`; 
}
addEvent(box, 'mouseenter', colorChange);

// Button function creation, user interaction

function clearScreen(){
    let temp = document.querySelectorAll('.box');
    for(i=0;i<temp.length;i++){
        temp[i].style.backgroundColor = 'white';
    }    
}

function screenSize(){
    const squares = document.querySelectorAll('.box');
    squares.forEach(function(e){
        e.remove();
    })
    const userChoice = prompt('Enter the number of squares:\nNote: 256 is the default value');
    createDiv(userChoice);
    let box = document.querySelectorAll('.box');
    addEvent(box, 'mouseenter', colorChange);
}

function lineColor(){
    color = prompt('Select a color:\nPlease use basic names');
}