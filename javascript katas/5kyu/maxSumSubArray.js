
function maxSequence(arr){
    const result =[];
    for (let st=0; st<arr.length; st++){
        let subArray =[];
        for(let en=0; en<arr.length; en++){
            subArray.push[arr[en]]
            result.push([...subArray])
            
        }
        return result;
    }
    let allSubArrays = maxSequence([1, 2, 3, 4]);
    function maxSumSubArray(allSubArrays){
        let counter= 0;
        for(let i=0; i<allSubArrays.length; i++){
            let sumArray =[];
            for (let j=0;j<allSubArrays[i].length; j++){
                counter += allSubArrays[i][j];
                sumArray.push(counter);
            }                
        }
        return sumArray
    }
    function greatestSum(sumArray){
        let greatestSum = 0;
        for(let i=0; i<sumArray.length; i++){
            if(sumArray[i]>greatestSum){
                greatestSum = sumArray[i];
            }
           
    }
        return greatestSum;
    
}
    
}