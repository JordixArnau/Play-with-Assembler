//Functions that activate the different templates

function start() {
    document.querySelector('main').innerHTML = "";
    let startTemp = document.getElementById('start').content;
    document.querySelector('main').appendChild(startTemp.cloneNode(true));
}

start();
document.getElementById('footStart').addEventListener('click', start);


function ready() {
    document.querySelector('main').innerHTML = "";
    let readyTemp = document.getElementById('ready-template').content;
    document.querySelector('main').appendChild(readyTemp.cloneNode(true));
}

document.getElementById('readyBtn').addEventListener('click', ready);
document.getElementById('readyBtn').addEventListener('click', contador);

function phase1() {
    document.querySelector('main').innerHTML = "";
    let phase1Temp = document.getElementById('phase1').content;
    document.querySelector('main').appendChild(phase1Temp.cloneNode(true));
}

document.getElementById('footPhase1').addEventListener('click', phase1);

function phase2() {
    document.querySelector('main').innerHTML = "";
    let phase2Temp = document.getElementById('phase2').content;
    document.querySelector('main').appendChild(phase2Temp.cloneNode(true));
}

document.getElementById('footPhase2').addEventListener('click', phase2);


function finish() {
    document.querySelector('main').innerHTML = "";
    let finishTemp = document.getElementById('finish').content;
    document.querySelector('main').appendChild(finishTemp.cloneNode(true));
    document.getElementById('result').innerHTML = startNumber;
}

document.getElementById('footFinish').addEventListener('click', finish);


/*---------------------------------------
--------------- ERICK FORMS -------------
-----------------------------------------*/

function checkName() {
    /* Pescando los IDs del html */
    const nameInput = document.getElementById("name__player");


}


function sendForm (){


    /* Botones que seleccionan el JUEGO*/
    const fase1Btn = document.getElementById("fase1__btn");
    const fase2Btn = document.getElementById("fase2__btn");
    /* Botones que seleccionan el NIVEL*/
    const lowBtn = document.getElementById("low__level__btn");
    const mediumBtn = document.getElementById("medium__level__btn");
    const hardBtn = document.getElementById("hard__level__btn");
    /* boton de START*/
    const startBtn = document.getElementById("start__btn");
    /* Divs donde se pondrán los nombres*/
    const nameAside = document.getElementById("name__aside");
    const gameAside = document.getElementById("game__aside");
    const levelAside = document.getElementById("level__aside");

    /* Regex para el nombre */
    const nameRegex = /^[a-zA-ZÀ-ÿ\_\-]{4,16}$/;

    /* Añadiendo EventListeners a los botones*/
    fase1Btn.addEventListener('click', () =>{
        gameAside.innerHTML = fase1Btn.value;
    });
    fase2Btn.addEventListener('click', () =>{
        gameAside.innerHTML = fase2Btn.value;
    });
    /* Listeners del ASIDE */
    lowBtn.addEventListener('click', () =>{
        levelAside.innerHTML = lowBtn.innerHTML;
    });
    mediumBtn.addEventListener('click', () =>{
        levelAside.innerHTML = mediumBtn.innerHTML;
    });
    hardBtn.addEventListener('click', () =>{
        levelAside.innerHTML = hardBtn.innerHTML;
    });


    /* Aquí está la funcion que va a validar el REGEX del nombre */
    const formValidate = (e) => {
        // e.target.name;
        // if(nameRegex.test(e.target.value)){}

        nameAside.innerHTML = nameInput.value;

    };
    /* El evento BLUR se ejecutará cuando se haga click fuera del input */
};


document.getElementById("name__player").addEventListener('blur', checkName);
document.getElementById("name__player").addEventListener('keyup', checkName);

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
    document.querySelector('main').innerHTML = "";
    let readyTemp = document.getElementById('ready-template').content;

    document.querySelector('main').appendChild(readyTemp.cloneNode(true));
};

document.getElementById('start__btn').addEventListener('click', toReady);
document.getElementById('start__btn').addEventListener('click', contador);