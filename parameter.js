//membuat function dengan parameter
function functionParam(x, y, z) {

    console.log("cetak parameter x = " + x)
    console.log("cetak parameter y = " + y)
    console.log("cetak parameter z = " + z)

}


functionParam("halo", "saya", "ini");


// function dengan parameter default
function tes(x = 10) {
    console.log(x);

}

tes();