/* /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ */
const checkEmail = email => {
  var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  var output;

  if(typeof email == "number"){
    output = 'Error'
  }else if (typeof email == null){
    output = 'Error'
  }else if (typeof email == "string"){
     if (email.match(format)) {
      output = "Valid";
    }else{
      output = "Invalid";
    }
  }else{
    output = 'Error'
  }
  return output;
}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
console.log(checkEmail(3322))
console.log(checkEmail())




// const checkEmail = email => {
//   let regexCek = /(\w+)@/
//   let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//   let output;

//   if(typeof email == "number"){
//     output = 'Error'
//   }else if (typeof email == null){
//     output = 'Error'
//   }else if (typeof email == "string"){
//     if (email.match(regexCek) == null) {
//     output = 'Error'
//     } else if (email.match(regex)) {
//       output = "Valid";
//     }else{
//       output = "Invalid";
//     }
//   }else{
//     output = 'Error'
//   }
//   return output;
// }

