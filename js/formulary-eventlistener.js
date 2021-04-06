/* El evento BLUR se ejecutará cuando se haga click fuera del input */
document.getElementById("name__player").addEventListener('blur', checkName);
document.getElementById("name__player").addEventListener('keyup', checkName);

document.getElementById("fase1__btn").addEventListener('click', checkMode);
document.getElementById("fase2__btn").addEventListener('click', checkMode);

document.getElementById("mouse_btn").addEventListener('click', checkDifficulty);
document.getElementById("keyboard_btn").addEventListener('click', checkDifficulty);

document.getElementById("start__btn").addEventListener('click', toReady);
