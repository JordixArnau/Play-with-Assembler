/****Finish page buttons****/
let tryAgainButton = document.getElementById('tryagain-button');
let homingButton = document.getElementById('homing-button');
let userMode = document.getElementById('game__aside').innerText;

// countDown = undefined;
// countDown.remove();

homingButton.addEventListener('click', start);
tryAgainButton.addEventListener('click', function(){
    if (userMode == "Phase 2") {
        phase2();
    } else {
        phase1();
    }
});
