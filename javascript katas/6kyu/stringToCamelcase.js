// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

function ConvertStringToCamelCase(word){
    let letters = word.split(/[_-]/)
    
    return letters.filter(x => x!== '_' && x !== '-').join()


}

let c = ConvertStringToCamelCase("mmnvbdnv-jmcbsmjf_nmbfbd")
console.log(c)
let b = ConvertStringToCamelCase("Mjssf-xcnf_sdvshf-nfdn")
console.log(b)