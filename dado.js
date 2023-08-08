function rollDice() {
var n1 = Math.ceil(Math.random() * 6);
var n2 = Math.ceil(Math.random() * 6);

var dado1 = "images/dice" + n1 + ".png";
var dado2 = "images/dice" + n2 + ".png";

var dadouno = document.querySelectorAll('img')[0];
var dadodos = document.querySelectorAll('img')[1];

dadouno.setAttribute('src', dado1);
dadodos.setAttribute('src', dado2);


if(n1 > n2) {
    document.querySelector('h1').innerHTML = 'Player 1 Won';
} 
else if(n1 < n2) {
    document.querySelector('h1').innerHTML = 'Player 2 Won';
}
else if(n1 = n2) {
    document.querySelector('h1').innerHTML = 'DRAW';
} 
}

var boton = document.querySelector('.btn');
boton.addEventListener('click', rollDice);
document.addEventListener('DOMContentLoaded', rollDice);
