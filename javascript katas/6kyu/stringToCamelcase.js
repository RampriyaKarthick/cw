// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

function ConvertStringToCamelCase(word){
    let letters = word.split(/[_-]/)
    
    return letters.map((word,index) => {
if(index === 0 )
    return word;

return word.charAt(0).toUpperCase()+word.slice(1)
    })
    .join('')


}

let c = ConvertStringToCamelCase("mmnvbdnv-Jmcbsmjf_nmbfbd")
console.log(c)
let b = ConvertStringToCamelCase("Mjssf-xcnf_sdvshf-nfdn")
console.log(b)