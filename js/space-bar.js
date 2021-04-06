//This function checks first if the 'keyboard' mode is active.
//Second removes the event listener for the clicks.
//Then adds an event listener that executes the score function when
//the spaces-bar is pressed.

function keyboardMode(event) {
    if (event.code == 'Space') {
        addToNumber();
    }
}

function spaceBarMode() {
    let level = document.getElementById('level__aside').innerHTML;

    clickButton.removeEventListener('click', addToNumber);

    if (level == 'Keyboard') {
        document.addEventListener('keyup', keyboardMode);
    }
}

spaceBarMode();