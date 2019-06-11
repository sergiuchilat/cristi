alert ('JavaScript site');
alert ('For training');

function button() {
    alert ('E un buton lucrator');
}
 
function text() {
    alert ('Nu e buton da tot merge');
}

function f1() {
    alert ('E chiar un buton adevarat');
}

function java() {
    alert ('Da e un site JavaScript');
}

function numar(id) {
    return +document.getElementById(id).value
}

function patrat() {
    var num2 = numar('inp1')
    alert (num2*num2);
}

function cube() {
    alert (numar('inp4') * numar('inp4') * numar('inp4'));
}

function adunare()  {
    alert (numar('inp2') + numar('inp3'));

}

function scadere(){
    alert (numar('inp2') - numar('inp3'));
}

function inmultire(){
    alert (numar('inp2') * numar('inp3'));
}

function impartire(){
    alert (numar('inp2') / numar('inp3'));
}

function out(){
    var p;
    p = document.getElementById('out()');
    p.innerHTML += '<b>=Ai apasat un buton</b>'
}


var a, b
a=8
b=8

if (a>b) {
    alert ('Prima cifra e mai mare');
}

else if (a==b) {
    alert ('Cifrele sunt egale')
}

else{
    alert ('A doua cifra e mai mare');
}

function compara() {
    var n;
    n = document.getElementById('num1').value
    p = document.getElementById('out');
    n = parseInt (n);
    if  (n==100) {
        p.innerHTML = 'Numaru e egal cu 100'
    }
    else if (n<100) {
        p.innerHTML = 'Numarul e mai mic'
    }
    else {
    p.innerHTML = 'Numarul e mai mare'
    }
}

function victorina() {
    var num, prNum, out((), tempOut;
    prNum = Math.floor((Math.random() * 10) + 1);
    tempOut = document.getElementById('temp-out');
    tempOut.innerHTML = prNum
    num = document.getElementById('mynum');
    out = document.getElementById('out');

    if (num == prNum) {
        out.innerHTML = 'Ai ghicit!!!'
    }

    else if (num > prNum) {
        out.innerHTML = 'Numaru e mai mare'
    }

    else {
        out.innerHTML = 'Numaru e mai mare'
    }
}