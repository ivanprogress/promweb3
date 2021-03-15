// deklarasi fungsi bernama konvers
function konvers() {
var angka=document.fkonversi. T1. value  // deklarasi variabel bernama val1

//seleksi variabel angka
if (angka >=0 && angka <=40) {
  document.getElementById("phuruf").innerHTML ="E";  //elemen dengan id phuruf akan berubah nilainya menjadi E
}
else if (angka >=41 &&angka <=55) {
  document.getElementById("phuruf").innerHTML ="D";  //elemen dengan id phuruf akan berubah nilainya menjadi D
}
else if (angka >=56 &&angka <=60) {
  document.getElementById("phuruf").innerHTML ="C";  //elemen dengan id phuruf akan berubah nilainya menjadi C
}
else if (angka >=61 && angka <=65) {
  document.getElementById("phuruf").innerHTML ="BC"; //elemen dengan id phuruf akan berubah nilainya menjadi BC
}
else if (angka >=66 && angka <=70) {
  document.getElementById("phuruf").innerHTML ="B";  //elemen dengan id phuruf akan berubah nilainya menjadi B
}
else if (angka >=71 && angka <=80) {
  document.getElementById("phuruf").innerHTML ="AB";  //elemen dengan id phuruf akan berubah nilainya menjadi AB
}
else if (angka >=81 && angka <=100) {
  document.getElementById("phuruf").innerHTML ="A";  //elemen dengan id phuruf akan berubah nilainya menjadi A
}
else {
  document.getElementById("phuruf").innerHTML ="NILAI MELEBIHI BATAS"; //elemen dengan id phuruf akan berubah nilainya menjadi NILAI MELEBIHI BATAS
}
}

// deklarasi fungsi bernama tambah
function tambah(){
  var bil1=parseFloat(document.calculator. T1. value) // deklarasi variabel bernama bil1
  var bil2=parseFloat(document.calculator. T2. value) // deklarasi variabel bernama bil2
  var total= bil1+bil2; // deklarasi variabel total
  document.calculator. T3. value =total; // value T3 berubah menjandi variabel total
}
// deklarasi fungsi bernama kurang
function kurang(){
  var bil1=parseFloat(document.calculator. T1. value) // deklarasi variabel bernama bil1
  var bil2=parseFloat(document.calculator. T2. value) // deklarasi variabel bernama bil2
  var total= bil1-bil2;// deklarasi variabel total
  document.calculator. T3. value =total; // value T3 berubah menjandi variabel total
}
// deklarasi fungsi bernama kali
function kali(){
  var bil1=parseFloat(document.calculator. T1. value) // deklarasi variabel bernama bil1
  var bil2=parseFloat(document.calculator. T2. value) // deklarasi variabel bernama bil2
  var total= bil1*bil2;// deklarasi variabel total
  document.calculator. T3. value =total; // value T3 berubah menjandi variabel total
}
// deklarasi fungsi bernama bagi
function bagi(){
  var bil1=parseFloat(document.calculator. T1. value) // deklarasi variabel bernama bil1
  var bil2=parseFloat(document.calculator. T2. value) // deklarasi variabel bernama bil2
  var total= bil1/bil2;// deklarasi variabel total
  document.calculator. T3. value =total; // value T3 berubah menjandi variabel total
}
