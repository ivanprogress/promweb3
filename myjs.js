function konvers() {
var angka=document.fkonversi. T1. value

if (angka >=0 && angka <=40) {
  document.getElementById("phuruf").innerHTML ="E";
}
else if (angka >=41 &&angka <=55) {
  document.getElementById("phuruf").innerHTML ="D";
}
else if (angka >=56 &&angka <=60) {
  document.getElementById("phuruf").innerHTML ="C";
}
else if (angka >=61 && angka <=65) {
  document.getElementById("phuruf").innerHTML ="BC";
}
else if (angka >=66 && angka <=70) {
  document.getElementById("phuruf").innerHTML ="B";
}
else if (angka >=71 && angka <=80) {
  document.getElementById("phuruf").innerHTML ="AB";
}
else if (angka >=81 && angka <=100) {
  document.getElementById("phuruf").innerHTML ="A";
}
else {
  document.getElementById("phuruf").innerHTML ="NILAI MELEBIHI BATAS";
}
}

function tambah(){
  var bil1=parseFloat(document.calculator. T1. value)
  var bil2=parseFloat(document.calculator. T2. value)
  var total= bil1+bil2;
  document.calculator. T3. value =total;
}
function kurang(){
  var bil1=parseFloat(document.calculator. T1. value)
  var bil2=parseFloat(document.calculator. T2. value)
  var total= bil1-bil2;
  document.calculator. T3. value =total;
}
function kali(){
  var bil1=parseFloat(document.calculator. T1. value)
  var bil2=parseFloat(document.calculator. T2. value)
  var total= bil1*bil2;
  document.calculator. T3. value =total;
}
function bagi(){
  var bil1=parseFloat(document.calculator. T1. value)
  var bil2=parseFloat(document.calculator. T2. value)
  var total= bil1/bil2;
  document.calculator. T3. value =total;
}
