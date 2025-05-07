function bitCounting(number){
    let binaryValue = number.toString(2); //,toString(2) to the base 2 gives binary string of the number
    let counter = 0;
    for(let i=0;i<binaryValue.length; i++){
        if(binaryValue[i] === '1'){
            counter++
        }
       
    }
    return counter;
}
let b= bitCounting(8)
console.log(b)
