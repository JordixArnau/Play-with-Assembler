//Getting the button with "click-box" as id.
var myOutput = document.getElementById("output-box");
//Getting the id for the tag where you want to output your number
var startNumber = 0;


/* #### Easy Mode Variables######*/
var myButtonEasy = document.getElementById("game-box");
var myButtonNormal = document.getElementById("game-box-normal");

/* #### Normal Mode Variables######*/
let oldTarget = document.querySelector('.target-item');

oldTarget.addEventListener('click', normalGame);
oldTarget.addEventListener('click', addToNumber);



myButtonEasy.onclick = addToNumber;
// myButtonNormal.onclick = addToNumber;


function addToNumber(){
	myOutput.innerHTML = `The current number of clicks is: ${1+startNumber++}`;
	
}
function normalGame(){
    let matrixBoard = document.querySelectorAll('.board-item');
    let oldTarget = document.querySelector('.target-item');
    let clickHereText = document.getElementById('click-here-text');

    /*Setting new random position for target element*/
    let randRow = Math.floor(Math.random() * 5) + 1;
    let randColumn = Math.floor(Math.random() * 5) + 1;
    let randPos = randRow.toString()+randColumn.toString();

    /*Setting new random size for target element*/
    let randHeight = 10*(Math.floor(Math.random() * 5) + 5);
    let randWidth = 10*(Math.floor(Math.random() * 5) + 5);

    /*Removing target element style for current element*/
    oldTarget.classList.remove("target-item");
    oldTarget.innerHTML = '';
    oldTarget.removeEventListener('click', normalGame);
    oldTarget.removeAttribute('id');
    // oldTarget.removeChild(oldTarget.lastElementChild);

    /*Adding target element to the new random element*/
    for (let i = 0; i < matrixBoard.length; i++) {
        let dataItem = matrixBoard[i].getAttribute("data-item");
        if (dataItem==randPos) 
        {
            matrixBoard[i].classList.add("target-item")
            matrixBoard[i].style.height = randHeight.toString()+"%";
            matrixBoard[i].style.width = randWidth.toString()+"%";
            matrixBoard[i].innerHTML = '<p id="click-here-text">Click here</p>';
            matrixBoard[i].addEventListener('click', normalGame);
            matrixBoard[i].addEventListener('click', addToNumber);
            // matrixBoard[i].id = "game-box-normal";

        }
    }
 };

 function goBack() {
    window.history.back();
  }

