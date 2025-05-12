function moveZerosToTheEnd(arr) {
    let zeroCounter =[];
    let arrCounter=[];
    for(let i=0; i<arr.length; i++){
      if(arr[i] === 0){
        zeroCounter.push(arr[i])
      }
      else{
        arrCounter.push(arr[i])
      }
    }
    return arrCounter.concat(zeroCounter)
  }
  let arr = [1, 0, 2, 0, 3, 0, 4];
    console.log(moveZerosToTheEnd(arr)); 
  