countDown.style.display = "flex";
countDown.innerHTML = "10";

let intervalCountdown = setInterval(function () {
    countDown.innerHTML = intervalValue.toString();
    intervalValue--;
    if (intervalValue == -1) {
        countDown.style.display = "none";
        clearInterval(intervalCountdown);
        finish();
    }
},1000);



