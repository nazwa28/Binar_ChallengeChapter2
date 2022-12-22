// Function menggunakan arrow (Arrow Function)
const checkTypeNumber = givenNumber => {
  if(typeof givenNumber == "number") {
    return(givenNumber % 2 === 0 ? "GENAP":"GANJIL")
  }else if(givenNumber == null){
    return "Bro where is the parameter?"
  }else{
    return "Error: Invalid dataType"
  }
}

  console.log(checkTypeNumber(10));
  console.log(checkTypeNumber(3));
  console.log(checkTypeNumber("3"));
  console.log(checkTypeNumber({}));
  console.log(checkTypeNumber([]));
  console.log(checkTypeNumber());

// untuk mengecek sesuatu menggunakan if

// function checkTypeNumber(givenNumber){
//      if(typeof(givenNumber) == 'number'){
//       if(givenNumber % 2 == 0){
//          return "GENAP"
//       }else{
//          return "GANJIL"
//       }if (typeof(givenNumber) == 'null'){
//       return "Bro where is the parameter?"
//      }
  
//    // return checkTypeNumber(givenNumber);
//     }