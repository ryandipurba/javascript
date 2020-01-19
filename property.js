function objectMobil() {
    var mobil = {
        type: 'sedan',
        harga: 200000000,
        warna: 'merah',
        //array dalam object
        tahun: [2013, 2014, 2015, 2016, 2017],
    }


    // merubah isi property type
    mobil.type = "suv"
    console.log(mobil.type);
}

objectMobil();