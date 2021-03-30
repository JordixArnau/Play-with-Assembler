//Functions that activate the different templates
//To activate or deactivate any of the templates just comment the function

function start() {
    document.querySelector('main').innerHTML = "";
    let startTemp = document.getElementById('start').content;
    document.querySelector('main').appendChild(startTemp.cloneNode(true));
}

 //start();


function ready() {
    document.querySelector('main').innerHTML = "";
    let readyTemp = document.getElementById('ready-template').content;
    document.querySelector('main').appendChild(readyTemp.cloneNode(true));
}

document.getElementById('readyBtn').addEventListener('click', ready);

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

// phase2();


/*---------------------------------------
--------------- ERICK FORMS -------------
-----------------------------------------*/

function sendForm (){

    /* Pescando los IDs del html */
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name__player");
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
    nameInput.addEventListener('blur', formValidate);
    nameInput.addEventListener('keyup', formValidate);

    /* No se muy bien que hace esta funcion de aqui abajo, pero vi que era recomendable en un video ya que lo que hace es como.. NO envar estos datos a ninguna página externa si tuviesemos PHP o algo así hasta que no se haga click en submit */
    form.addEventListener('submit', (element) => {
        element.preventDefault();
    });

};



















