document.querySelector(".foot").innerHTML="<h2>Thanks for Playing!</h2>";
var randomOne = Math.random();
var p1 = Math.floor((randomOne*6)+1);

var randomOne = Math.random();
var p2 = Math.floor((randomOne*6)+1);

if (p1===1) {
    document.querySelector(".p1 img").setAttribute("src","dice1.png");
}
else if (p1===2) {
    document.querySelector(".p1 img").setAttribute("src","dice2.png");
} 
else if (p1===3) {
    document.querySelector(".p1 img").setAttribute("src","dice3.png");
} 
else if (p1===4) {
    document.querySelector(".p1 img").setAttribute("src","dice4.png");
} 
else if (p1===5) {
    document.querySelector(".p1 img").setAttribute("src","dice5.png");
} 
else {
    document.querySelector(".p1 img").setAttribute("src","dice6.png");
}

if (p2===1) {
    document.querySelector(".p2 img").setAttribute("src","dice1.png");
}
else if (p2===2) {
    document.querySelector(".p2 img").setAttribute("src","dice2.png");
} 
else if (p2===3) {
    document.querySelector(".p2 img").setAttribute("src","dice3.png");
} 
else if (p2===4) {
    document.querySelector(".p2 img").setAttribute("src","dice4.png");
} 
else if (p2===5) {
    document.querySelector(".p2 img").setAttribute("src","dice5.png");
} 
else {
    document.querySelector(".p2 img").setAttribute("src","dice6.png");
}


if (p1>p2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if (p1<p2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML="It's a Draw!";
}