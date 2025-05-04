// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times

//For finding one number that appears odd times

function trouverOccurences(num){
    let x=0; //Initialise x to 0, xoring with 0 does not changge the value
    for(let i=0; i<num.length;i++){
        x=x^num[i]  //xor operation will cancel out numbers that appear an even number of times 
    }
    return x;
}

let number =trouverOccurences([7,7,8,8,4,4,6,6,7,4,4])
console.log(number);
