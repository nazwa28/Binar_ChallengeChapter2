function getSplitName(personName) {
    var fullName = personName;
    var nameTokens = "([A-Za-z]+),\\s+([A-Za-z]+)\\s+([A-Za-z]+)";
    var result = {};

    if (fullName.length >= 3) {
        var nameTokens = fullName.match(/[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g);

        /* --- First Name --- */
        if (nameTokens.length > 3) {
            result.firstName = nameTokens.slice(0, 2).join(' ');
        } else {
            result.firstName = nameTokens.slice(0, 1).join(' ');
        }

        /* --- Middle Name & Last Name --- */
        if (nameTokens.length > 2) {
            result.middleName = nameTokens.slice(-2, -1).join(' ');
            result.lastName = nameTokens.slice(-1).join(' ');
        } else {
            result.middleName = nameTokens.slice(-1).join(' ');
            result.lastName = "null";

            if (nameTokens.length < 2) {
                result.middleName = "null";
                result.lastName = "null";
            }
        }
        // if (nameTokens.length > 3) {
        //     console.log("Error: This function is only 3 characters name")
        // }
    }else{
        console.log('ERROR')
    }
    return result;

} 

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncora"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
