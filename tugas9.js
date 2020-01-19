// Buatlah Program Dengan Spesifikasi dibawah ini :

// Buatlah sebuah variabel object versi teman teman.
// Tampilkan berikan nilai pada masing masing properti objek yang teman teman buat
// Setelah itu tampilkan objectnya dengan perulangan for in.


var hewan = {
    nama: ['harimau', "paus", "gajah"],
    berat: [400, 1000, 1200],
    jenis: ['karnivora', 'mamalia', 'mamalia'],
}

for (var x in hewan) {
    for (var y in hewan[x]) {
        console.log(hewan[x][y]);
    }

}