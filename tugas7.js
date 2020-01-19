// Buatlah Program Dengan Spesifikasi dibawah ini :

// Buatlah sebuah variabel array dengan maksimal data 10 nilai yang berisikan tinggi badan;
// Tampilkan array tersebut dengan menggunakan perulangan biasa dan perulangan for off.
// Teman-teman analisis perbedaan hasilnya,
// Hint : -

var tinggi = [150, 170, 156, 160, 165, 155, 173, 177, 163, 154];


console.log("ini dengan for");
for (let index = 0; index < tinggi.length; index++) {
    console.log(tinggi[index]);

}
console.log("ini dengan for of");

for (let x of tinggi) {
    console.log(x);
}