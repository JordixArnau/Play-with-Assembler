/****Finish page buttons****/
tryAgainButton = document.getElementById('tryagain-button');
homingButton = document.getElementById('homing-button');
userMode = document.getElementById('game__aside').innerText;

// countDown = undefined;
// countDown.remove();

homingButton.addEventListener('click', function(){
    nameAside.innerHTML = nameInput;
    modeAlert.style.visibility = 'hidden';

    start();
});
tryAgainButton.addEventListener('click', function(){
    document.getElementById('output-box').innerHTML = "Current score: 0";
    if (userMode == "Phase 2") {
        phase2();
    } else {
        phase1();
    }
});
