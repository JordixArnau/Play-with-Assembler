/* El evento BLUR se ejecutará cuando se haga click fuera del input */
document.getElementById("name__player").addEventListener('blur', checkName);
document.getElementById("name__player").addEventListener('keyup', checkName);

document.getElementById("fase1__btn").addEventListener('click', checkMode);
document.getElementById("fase2__btn").addEventListener('click', checkMode);

document.getElementById("low__level__btn").addEventListener('click', checkDifficulty);
document.getElementById("medium__level__btn").addEventListener('click', checkDifficulty);
document.getElementById("hard__level__btn").addEventListener('click', checkDifficulty);

document.getElementById("start__btn").addEventListener('click', toReady);
