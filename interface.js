document.addEventListener('DOMContentLoaded', () =>{

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) =>{
        square.addEventListener('click', handleClick);
    });
    let resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetGame);

});

function handleClick(event){
    
    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        
        setTimeout(()=>{
            alert(`Player ${playerTime} foi o vencedor!`);
        }, 10)
       
    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares(){
    let squares = document.querySelectorAll('.square');
        squares.forEach((square)=>{
            let position = square.id;
            let symbol = board[position];

            if(symbol != ''){
                square.innerHTML = `<div class='${symbol}></div>'`
            }else{
                square.innerHTML = '';
            }
        });
}

function resetGame(){
   location.reload();
}