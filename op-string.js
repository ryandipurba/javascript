var x = 'halo ';
var z = 'budi ';
var angka = 20;

console.log(x + z + angka);


//operator spread
console.log('operator spread')
var angka1 = [1, 2, 3, 4];
var angka2 = [5, 6, 7, 8];
var angkaGabungan = [...angka1, ...angka2, 9, 10];
console.log(angkaGabungan);