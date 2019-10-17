const container = document.querySelector('.container');

function createDiv(num){
    for (i=0; i<num; i++){
        let i = document.createElement('div');
        i.classList.add('box');
        i.textContent = ('a box');
        container.appendChild(i);
    }
}
createDiv(256);

const box = document.querySelectorAll('.box');

function addEvent(item, event, func){
    for(i=0;i<item.length;i++){
        item[i].addEventListener(event, func, false);
    };
};

function colorChange(){
    this.style.backgroundColor = 'black'; 
}

addEvent(box, 'mouseenter', colorChange);

