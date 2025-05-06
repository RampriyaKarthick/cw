function createPhoneNumber(numbers){
    return`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}
console.log(createPhoneNumber([0,7,5,1,8,5,0,8,3,2]));