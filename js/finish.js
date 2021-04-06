/****Finish page buttons****/
tryAgainButton = document.getElementById('tryagain-button');
homingButton = document.getElementById('homing-button');
userMode = document.getElementById('game__aside').innerText;

homingButton.addEventListener('click', function(){

    nameAside.innerHTML = "-";
    gameAside.innerHTML = "-";
    levelAside.innerHTML = "-";
    document.getElementById('output-box').innerHTML = "-";
    
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
