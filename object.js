function objectMobil() {
    var mobil = {
        type: 'sedan',
        harga: 200000000,
        warna: 'merah',
        //array dalam object
        tahun: [2013, 2014, 2015, 2016, 2017],
    }



    console.log(mobil);
    console.log(mobil.type);
    console.log(mobil.tahun[2]);
}

objectMobil();