function isValidPassword (email) {
    var input = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

    if(typeof email == "number"){
        return 'ERROR'
      }else if (typeof email == "undefined"){
        return 'ERROR'
      }else if (typeof email == "string"){
        return(email.match(input) ? "true":"false")       
      }

}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())

// const isValidPassword = email=> {
//     if(typeof email== "string") {
//       return(email >= 8 ? "TRUE":"FALSE");
//     }else if(email== null){
//       return "Bro where is the parameter?"
//     }else{
//       return "Error: Invalid dataType"
//     }
//   }
    // } else if(password.match(hurufBesar)) {
    //     return "TRUE":"FALSE";
    // } else if (password.match(angka)){
    //     return "TRUE"
    // }else if (password >= 8){
    //     return "TRUE";
    // }else{
    //     return "ERROR"
    // }

    // var hurufKecil = /[a-z]/g
    // if(password.value.match(hurufKecil) ) {  
    //     return "TRUE";
    //   } else {
    //     return "FALSE";
    //   }
    
    // Validate capital letters
    // var upperCaseLetters = /[A-Z]/g;
    // if(myInput.value.match(upperCaseLetters)) {  
    //   capital.classList.remove("invalid");
    //   capital.classList.add("valid");
    // } else {
    //   capital.classList.remove("valid");
    //   capital.classList.add("invalid");
    // }
  
    // // Validate numbers
    // var numbers = /[0-9]/g;
    // if(myInput.value.match(numbers)) {  
    //   number.classList.remove("invalid");
    //   number.classList.add("valid");
    // } else {
    //   number.classList.remove("valid");
    //   number.classList.add("invalid");
    // }
    
    // // Validate length
    // if(myInput.value.length >= 8) {
    //   length.classList.remove("invalid");
    //   length.classList.add("valid");
    // } else {
    //   length.classList.remove("valid");
    //   length.classList.add("invalid");
    // }