const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

  const dataPenjualan = (data) => {
    var Keuntungan = 0;
    var Modal = 0;

    for(var i=0; i<data.length; i++){
        Keuntungan += ((data[i].hargaJual * data[i].totalTerjual) - (data[i].hargaBeli * (data[i].totalTerjual + data[i].sisaStok)));
    }
    const totalKeuntungan = `Rp${Keuntungan.toLocaleString("id-ID")}`
    

    for(var i=0; i<data.length; i++){
        Modal += (data[i].hargaBeli * (data[i].totalTerjual + data[i].sisaStok))
    }

    const totalModal = `Rp${Modal.toLocaleString("id-ID")}`;
    
    const Persentase = (Keuntungan/Modal) * 100
    const persentaseKeuntungan = Persentase.toFixed(2) + '%'

    const dataSort = data.sort((a, b) => b.totalTerjual - a.totalTerjual)
    const sort = {
        produkBukuTerlaris: dataSort[0].namaProduk,
        penulisTerlaris: dataSort[0].penulis

    }
    
    

    // console.log(`Total Keuntungan        : ` + totalKeuntungan)
    // console.log(`Total Modal             : ` + totalModal)
    // console.log(`Persentase Keuntungan   : ` + persentaseKeuntungan)

    const finaldata = {
        totalKeuntungan: totalKeuntungan,
        totalModal: totalModal,
        persentaseKeuntungan: persentaseKeuntungan,
        ...sort
    }
    return (finaldata)
  }

   console.log(dataPenjualan(dataPenjualanNovel))

   /*
   let totalKeuntungan = 0;
    let totalModal = 0;
    let produkTerlaris;
    let penulisBukuTerlaris = 0;
    let persentaseKeuntungan = 0;
    

    data.forEach(element => {
        
        
        totalKeuntungan += (element.hargaJual*element.totalTerjual)-(element.hargaBeli*(element.totalTerjual+element.sisaStok));
        totalModal += element.hargaBeli*(element.sisaStok+element.totalTerjual);
        produkTerlaris = 
        penulisBukuTerlaris =
        persentaseKeuntungan = totalKeuntungan/totalModal
        
        console.log(`Total Keuntungan: ` + totalKeuntungan);
        console.log(`Total Modal: ` + totalModal);
        console.log(`Produk Terlaris: ` +  produkTerlaris);
        console.log(`Penulis Buku Terlaris: ` +  penulisBukuTerlaris);
        console.log(`Persentase Keuntungan: ` + persentaseKeuntungan.toFixed(1))
        console.log(`======================================`)
    });

   

    return totalKeuntungan;
   */