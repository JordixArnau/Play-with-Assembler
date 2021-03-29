setInterval(function(){
    let matrixBoard = document.querySelectorAll('.board-item');
    let oldTarget = document.querySelector('.target-item');

    /*Setting new random position for target element*/
    let randRow = Math.floor(Math.random() * 5) + 1;
    let randColumn = Math.floor(Math.random() * 5) + 1;
    let randPos = randRow.toString()+randColumn.toString();

    /*Setting new random size for target element*/
    let randHeight = (10*(Math.floor(Math.random() * 5) + 5));
    let randWidth = 10*(Math.floor(Math.random() * 5) + 5);

    /*Removing target element style for current element*/
    oldTarget.classList.remove("target-item")

    /*Adding target element to the new random element*/
    for (let i = 0; i < matrixBoard.length; i++) {
        let dataItem = matrixBoard[i].getAttribute("data-item");
        if (dataItem==randPos) 
        {
            matrixBoard[i].classList.add("target-item")
            matrixBoard[i].style.height = randHeight.toString()+"%";
            matrixBoard[i].style.width = randWidth.toString()+"%";
        }
    }
     }, 1000);

