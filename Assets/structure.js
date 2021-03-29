//Functions that activate the different templates
//To activate or deactivate any of the templates just comment the function

function start() {
    let startTemp = document.getElementById('start').content;
    document.querySelector('main').appendChild(startTemp.cloneNode(true));
}

/* start(); */

function phase1() {
    let startTemp = document.getElementById('phase1').content;
    document.querySelector('main').appendChild(startTemp.cloneNode(true));
}

// phase1();

function phase2() {
    let startTemp = document.getElementById('phase2').content;
    document.querySelector('main').appendChild(startTemp.cloneNode(true));
}

phase2();