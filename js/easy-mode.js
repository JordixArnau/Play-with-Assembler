//Getting the button with "click-box" as id.
var myOutput = document.getElementById("output-box");
//Getting the id for the tag where you want to output your number
var startNumber = 0;


/* #### Easy Mode Variables######*/
var myButtonEasy = document.getElementById("game-box");


myButtonEasy.onclick = addToNumber;
// myButtonNormal.onclick = addToNumber;


function addToNumber(){
	myOutput.innerHTML = `Current score: ${1+startNumber++}`;
	
}

 function goBack() {
    window.history.back();
  }

