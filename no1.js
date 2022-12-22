function changeWorld (selectedText, changedText, text){
  return text.replace(selectedText, changedText);
  //  return text.split(selectedText).join(changedText);
}

// split()
// join()

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

console.log(changeWorld('mencintai', 'membenci', kalimat1));
console.log(changeWorld('bromo', 'semeru', kalimat2));
