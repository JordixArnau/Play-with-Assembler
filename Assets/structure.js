//Functions that activate the different templates
//To activate or deactivate any of the templates just comment the function

function start() {
    let startTemp = document.getElementById('start').content;
    document.querySelector('main').appendChild(startTemp.cloneNode(true));
}

 start();

function phase1() {
    let startTemp = document.getElementById('phase1').content;
    document.querySelector('main').appendChild(startTemp.cloneNode(true));
}

// phase1();

function phase2() {
    let startTemp = document.getElementById('phase2').content;
    document.querySelector('main').appendChild(startTemp.cloneNode(true));
}

/* phase2(); */


/*---------------------------------------
--------------- ERICK FORMS -------------
-----------------------------------------*/

function sendForm (){

    /* Pescando los IDs del html */
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
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

};



















