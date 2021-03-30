let startButton =  document.querySelector(".start-button");
startButton.addEventListener('click', gameTimer)

function timerCountDown(){
    let maxTime = 10;
    let countDowni = maxTime;
    var gameTimerInterval = setInterval(function(){
        countDowini--;
        if(countDowni == 0){
            clearInterval(gameTimerInterval);
        }
    })
}

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

