
function maxSequence(arr){
    const result =[];
    for (let st=0; st<arr.length; st++){
        let subArray =[];
        for(let en=st; en<arr.length; en++){
            subArray.push(arr[en])
            result.push([...subArray])
            
        }
        
    }
    if (result.length === 0) return 0;
   
    let maxSum = 0;
  for (let i = 0; i < result.length; i++) {
    let sum = result[i].reduce((a, b) => a + b, 0);
    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
}

    // let allSubArrays = maxSequence([1, 2, 3, 4]);
    // function maxSumSubArray(allSubArrays){
    //     let counter= 0;
    //     for(let i=0; i<allSubArrays.length; i++){
    //         let sumArray =[];
    //         for (let j=0;j<allSubArrays[i].length; j++){
    //             counter += allSubArrays[i][j];
    //             sumArray.push(counter);
    //         }                
    //     }
    //     return sumArray
    // }
    // function greatestSum(sumArray){
    //     let greatestSum = 0;
    //     for(let i=0; i<sumArray.length; i++){
    //         if(sumArray[i]>greatestSum){
    //             greatestSum = sumArray[i];
    //         }
           
    // }
    //     return greatestSum;
  
