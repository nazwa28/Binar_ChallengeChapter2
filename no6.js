function getAngkaTerbesarKedua(arr) {
    if (Array.isArray(arr) && arr.length >= 2){
        let numbers = new Set(arr.sort().reverse());
        return Array.from(numbers)[1];
    }
    return "ERROR";
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());








// split() : 
// isArray(arr) = untuk mengecek apakah array atau bukan
/*
sort() => mengurutkan angka yang terkecil ke terbesar
reverse() => mengurutkan dari yang terbesar ke terkecil
*/

// function short secara default dalam jS, angka 10 dan 9 akan lebih besar 9, karena dianggap 1 lebih besar dari 9