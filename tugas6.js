// Buatlah Program Dengan Spesifikasi dibawah ini :

// Buatlah sebuah perulangan dengan kondisi <=20 atau sebanyak 20 kali
// Setelah itu teman teman buatlah sebuah kondisi pada perulangan jika dia bilangan genap dia akan menampilkan text bilangan genap bukan angkanya, tetapi kalau yang tampil bilangan ganjil , biarkan angka nya yang ditampilkan.
// Tampilkan hasilnya dengan console.log()
// Hint : Gunakan if dan modulus %

function cekGanjilGenap(params) {
    for (let index = 1; index <= 20; index++) {
        if (index % 2 == 0) {
            console.log("genap");
        } else {
            console.log(index);
        }

    }
}

cekGanjilGenap();