const dataPenjualanPakAldi = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Black Hogh - Original',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Maroon - Original',
        hargaSatuan : 360000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Cordury - [BNIB] Original',
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
]

const hitungTotalPenjualan = (dataPenjualan) => {
    let totalTerjualKeseluruhan = 0;

    for(i=0; i<dataPenjualan.length; i++){
       totalTerjualKeseluruhan += dataPenjualan[i].totalTerjual

       console.log(dataPenjualan[i])
    }
    return totalTerjualKeseluruhan;
}

console.log(`Total keseluruhan sepatu yang terjual adalah: ` + hitungTotalPenjualan(dataPenjualanPakAldi));







// function hitungTotalPenjualan(dataPenjualan){
//     let totalTerjualKeseluruhan;

//     totalTerjualKeseluruhan = totalTerjual+totalTerjual;

//     console.log(totalTerjualKeseluruhan);
// }
