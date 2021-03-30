//Getting the button with "click-box" as id.
var myOutput = document.getElementById("output-box");
//Getting the id for the tag where you want to output your number
var startNumber = 0;

/* #### Easy Mode Variables######*/
var clickButton = document.getElementById("game-box");

clickButton.addEventListener('click', addToNumber);

function addToNumber(){
	myOutput.innerHTML = `Current score: ${1+startNumber++}`;
	
}

 function goBack() {
    window.history.back();
  }

