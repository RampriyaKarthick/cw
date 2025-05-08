function maskify(cc){
    cc=cc.toString()  //first convert the given input to String to confirm
    return cc.split('').reduce((acc, y,index) => {return index< cc.length -4 ? acc+ '#' :acc+y;},'') //usually .reduce has 4 arguments,when we want to compare the index we use index argument for reduce
    
}

let m = maskify("bjsdjdjdkjdscn")
console.log(m) 