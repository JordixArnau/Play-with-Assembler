let countDown = document.querySelector("#timerCount");
countDown.style.display = "flex";
let maxTime = 9;
let intervalValue = maxTime;

let intervalCountdown = setInterval(function () {
    countDown.innerHTML = intervalValue.toString();
    intervalValue--;
    if (intervalValue == -1) {
        countDown.style.display = "none";
        finish();
    }
},1000);

countDown.innerHTML = "10";


