// Buatlah Program Dengan Spesifikasi dibawah ini :

// Buatlah sebuah perulangan dengan kondisi <=20 atau sebanyak 20 kali
// Setelah itu teman teman tampilkan nilai kelipatan 3 pada perulangan tersebut
// Tampilkan hasilnya dengan console.log()
// Hint : Tampilan Output akan berupa nilai 3 , 6 ,9 , 12 ,15 dst.


function cekKelipatan3() {
    for (let index = 1; index <= 20; index++) {
        if (index % 3 == 0) {
            console.log(index);
        }

    }
}

cekKelipatan3();