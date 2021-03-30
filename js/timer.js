let startButton =  document.querySelector(".start-button");
startButton.addEventListener('click', gameTimer)

function gameTimer() {
startButton.style.display = "none";
phase1();
setTimeout(function (){
    clickButton.removeEventListener('click', addToNumber);
    
    setTimeout(() => {
        finish();
    }, 2000);
}, 10000);
}

