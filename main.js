// Creating the divs
const container = document.querySelector('.container');
function createDiv(num){
    for (i=0; i<num; i++){
        let i = document.createElement('div');
        i.classList.add('box');
        i.textContent = ('box');
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
function colorChange(){
    this.style.backgroundColor = 'black'; 
}
addEvent(box, 'mouseenter', colorChange);

// Button function creation
function clearScreen(){
    let temp = document.querySelectorAll('.box');
    for(i=0;i<temp.length;i++){
        temp[i].style.backgroundColor = 'white';
    }    
}

function screenSize(){
    let input = prompt('Enter a size:');
    let output = createDiv(input);
    return output;

}

function lineColor(){
    let color = prompt('Select a color:');


}