let count = 0;
let countButton = document.querySelector('#count-el')
let saveEl = document.querySelector('#save-el')


function increment () {
    count += 1;
    countButton.innerHTML = count;
  
}

function save() {
    let both = count + ' - '
    saveEl.innerHTML += both
    countButton.innerHTML = 0
    count = 0
}
