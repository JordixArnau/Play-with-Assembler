var myButton = document.getElementById("main-box");
//Getting the button with "click-box" as id.
var myOutput = document.getElementById("output-box");
//Getting the id for the tag where you want to output your number
var startNumber = 0;


function addToNumber(){
	myOutput.innerHTML = `The current number is: ${1+startNumber++}`;
	
}
myButton.onclick = addToNumber;

