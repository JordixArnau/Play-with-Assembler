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


/* #### Easy Mode ######*/
var myButton = document.getElementById("game-box");
//Getting the button with "click-box" as id.
var myOutput = document.getElementById("output-box");
//Getting the id for the tag where you want to output your number
var startNumber = 0;


function addToNumber(){
	myOutput.innerHTML = `The current number of clicks is: ${1+startNumber++}`;
	
}
myButton.onclick = addToNumber;

function goBack() {
    window.history.back();
  }

 
