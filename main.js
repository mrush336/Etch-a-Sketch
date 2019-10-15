const container = document.querySelector('.container');
//console.log(container);
function createDiv(num){
    for (i=0; i<num; i++){
        let i = document.createElement('div');
        i.classList.add('box');
        i.textContent = ('abox');
        container.appendChild(i);
    }
}

createDiv(256);

