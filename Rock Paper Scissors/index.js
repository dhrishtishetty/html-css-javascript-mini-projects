var n1 = Math.floor(Math.random() * 3) + 1;
var n2 = Math.floor(Math.random() * 3) + 1;


function func1() {
    document.getElementById("player1").src = "images/" + n1 + ".png";
    var btn2 = document.getElementById("btn2");
    btn2.disabled = false;
}

function func2() {
    document.getElementById("player2").src = "images/" + n2 + ".png";
}

function func3() {
    var para = document.getElementById("para");
    para.style.display = "block";
}


if ((n1 === 1 && n1 === 1) || (n1 === 2 && n2 === 2) || (n1 === 3 && n2 === 3)) {
    document.getElementById("para").innerHTML = "Draw!";
}

if ((n1 === 2 && n2 === 1) || (n1 === 1 && n2 === 3) || (n1 === 3 && n2 === 2)) {
    document.getElementById("para").innerHTML = "Player 1 Wins!";
}

if ((n1 === 1 && n2 === 2) || (n1 === 3 && n2 === 1) || (n1 === 2 && n2 === 3)) {
    document.getElementById("para").innerHTML = "Player 2 Wins!";
}




