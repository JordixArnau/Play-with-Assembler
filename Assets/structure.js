//Functions that activate the different templates

function start() {
    document.querySelector('main').innerHTML = "";
    let startTemp = document.getElementById('start').content;
    document.querySelector('main').appendChild(startTemp.cloneNode(true));
}

start();

function ready() {
    document.querySelector('main').innerHTML = "";
    let readyTemp = document.getElementById('ready-template').content;
    document.querySelector('main').appendChild(readyTemp.cloneNode(true));
}

function phase1() {
    document.querySelector('main').innerHTML = "";
    let phase1Temp = document.getElementById('phase1').content;
    document.querySelector('main').appendChild(phase1Temp.cloneNode(true));
}

function phase2() {
    document.querySelector('main').innerHTML = "";
    let phase2Temp = document.getElementById('phase2').content;
    document.querySelector('main').appendChild(phase2Temp.cloneNode(true));
}


function finish() {
    document.querySelector('main').innerHTML = "";
    let finishTemp = document.getElementById('finish').content;
    document.querySelector('main').appendChild(finishTemp.cloneNode(true));
    document.getElementById('result').innerHTML = startNumber;
    rankingCount(rank, rankMode);

    if (document.getElementById('level__aside').innerHTML == 'Keyboard') {
        document.removeEventListener('keyup', keyboardMode);
    }

    setTimeout(() => {
        document.querySelectorAll('#finishDisplay button')[0].style.opacity = '1';
        document.querySelectorAll('#finishDisplay button')[0].style.visibility = 'visible';
        document.querySelectorAll('#finishDisplay button')[1].style.opacity = '1';
        document.querySelectorAll('#finishDisplay button')[1].style.visibility = 'visible';
    }, 5000);
}


/*---------------------------------------
--------------- ERICK FORMS -------------
-----------------------------------------*/
/*Getting aside elements by id*/
let nameAside = document.getElementById("name__aside");
let gameAside = document.getElementById("game__aside");
let levelAside = document.getElementById("level__aside");



function checkName() {
    /* Pescando los IDs del html */
    const nameInput = document.getElementById("name__player").value;
    let nameAlert = document.querySelectorAll('.alerts')[0];

    if (nameInput == "") {
        nameAlert.style.visibility = 'visible';
        nameAside.innerHTML = '-';
    } else {
        nameAlert.style.visibility = 'hidden';
        nameAside.innerHTML = nameInput;
    }
}

function checkMode(event) {
    /* Botones que seleccionan el JUEGO*/
    const fase1Btn = document.getElementById("fase1__btn");
    const fase2Btn = document.getElementById("fase2__btn");
    const gameAside = document.getElementById("game__aside");
    let level = document.getElementById('group__level');
    let modeAlert = document.querySelectorAll('.alerts')[1];

    if (event.target.value == "Phase 1") {
        gameAside.innerHTML = "Phase 1";
        fase2Btn.style.backgroundColor = 'white';
        fase2Btn.style.color = 'black';
        fase1Btn.style.backgroundColor = '#C29F13';
        modeAlert.style.visibility = 'hidden';
        level.style.visibility = 'visible';
        document.getElementById("level__aside").innerHTML = '-';
    } else if  (event.target.value == "Phase 2") {
        gameAside.innerHTML = "Phase 2";
        fase1Btn.style.backgroundColor = 'white';
        fase1Btn.style.color = 'black';
        fase2Btn.style.backgroundColor = '#C29F13';
        modeAlert.style.visibility = 'hidden';
        level.style.visibility = 'hidden';
        document.getElementById("level__aside").innerHTML = 'Standard';
    }
}

function checkDifficulty(e) {
    /* Botones que seleccionan el NIVEL*/
    const mouseBtn = document.getElementById("mouse_btn");
    const keyboardBtn = document.getElementById("keyboard_btn");
    const levelAside = document.getElementById("level__aside");
    let difficultyAlert = document.querySelectorAll('.alerts')[2];
    let explanation = document.querySelectorAll('.explanation');

    if (e.target.innerHTML == "Mouse") {
        levelAside.innerHTML = "Mouse";
        keyboardBtn.style.backgroundColor = 'white';
        keyboardBtn.style.color = 'black';
        mouseBtn.style.backgroundColor = '#C29F13';
        difficultyAlert.style.display = 'none';
        explanation[0].style.display = 'inline-block';
        explanation[1].style.display = 'none';

    } else if  (e.target.innerHTML == "Keyboard") {
        levelAside.innerHTML = "Keyboard";
        mouseBtn.style.backgroundColor = 'white';
        mouseBtn.style.color = 'black';
        keyboardBtn.style.backgroundColor = '#C29F13';
        difficultyAlert.style.display = 'none';
        explanation[1].style.display = 'inline-block';
        explanation[0].style.display = 'none';
    }
}

/* El evento BLUR se ejecutará cuando se haga click fuera del input */
document.getElementById("name__player").addEventListener('blur', checkName);
document.getElementById("name__player").addEventListener('keyup', checkName);

document.getElementById("fase1__btn").addEventListener('click', checkMode);
document.getElementById("fase2__btn").addEventListener('click', checkMode);

document.getElementById("mouse_btn").addEventListener('click', checkDifficulty);
document.getElementById("keyboard_btn").addEventListener('click', checkDifficulty);

document.getElementById("start__btn").addEventListener('click', toReady);

//Phase 1 game global variables
let countDown = document.querySelector("#timerCount");
let maxTime = 9;
let intervalValue = maxTime;
let intervalCountdown = null;

//Phase 2 game global variables
let oldTarget = document.querySelector('.target-item');


//Finish page global variables
let tryAgainButton = document.getElementById('tryagain-button');
let homingButton = document.getElementById('homing-button');
let userMode = document.getElementById('game__aside').innerText;

//Function for the countdown before beginning the game
function contador (){

    /* Pescando los diferentes numeros */
    const number3 = document.getElementById("number-3");
    const number2 = document.getElementById("number-2");
    const number1 = document.getElementById("number-1");
    const number0 = document.getElementById("number-0");

    //Defining the elements to change to the game
    let selectedMode = document.getElementById('game__aside').innerText;
    let p1 = document.getElementById('phase1').content;
    let p2 = document.getElementById('phase2').content;

    /* Usando el Set timeout enciendo el div contenedor del numero exacto que quiero que se vea en pantalla. */
    setTimeout(() =>{
        number3.style.display = "block";
    },1000);
    setTimeout(() =>{
        number2.style.display = "block";
        number3.style.display = "none";
    },2000);
    setTimeout(() =>{
        number1.style.display = "block";
        number2.style.display = "none";
    },3000);
    setTimeout(() =>{
        number0.style.display = "block";
        number1.style.display = "none";
    },4000);
    setTimeout(() =>{
        number0.style.display = "none";

        if (selectedMode == 'Phase 2') {
            document.querySelector('main').appendChild(p2.cloneNode(true));
        } else {
            document.querySelector('main').appendChild(p1.cloneNode(true));
        }
    },5000);

}


//Function to start the selected phase of the game going through the ready section
function toReady() {
    let readyTemp = document.getElementById('ready-template').content;
    let nameAlert = document.querySelectorAll('.alerts')[0];
    let modeAlert = document.querySelectorAll('.alerts')[1];
    let difficultyAlert = document.querySelectorAll('.alerts')[2];
    const nameAside = document.getElementById("name__aside");
    const gameAside = document.getElementById("game__aside");
    const levelAside = document.getElementById("level__aside");

    if (nameAside.innerHTML == '-') {
        nameAlert.style.visibility = 'visible';
    }

    if (gameAside.innerHTML == '-') {
        modeAlert.style.visibility = 'visible';
    }

    if (levelAside.innerHTML == '-' && document.getElementById('group__level').style.visibility == 'visible') {
        difficultyAlert.style.visibility = 'visible';
    }

    if (gameAside.innerHTML != '-' && nameAside.innerHTML != '-' && levelAside.innerHTML != '-') {
        document.querySelector('main').innerHTML = "";
        document.querySelector('main').appendChild(readyTemp.cloneNode(true));
        contador();
    }
};


document.getElementById('start__btn').addEventListener('click', toReady);



